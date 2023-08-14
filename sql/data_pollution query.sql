DROP TABLE air_pollution;
CREATE TABLE air_pollution (
aqi integer NOT NULL, 
date date NOT NULL, 
lat double precision NOT NULL, 
lon double precision NOT NULL, 
name character varying NOT NULL, 
time time without time zone NOT NULL, 
uid double precision NOT NULL
);

-- this query retrieves the first 10 records from the 'air_pollution' table
SELECT * FROM air_pollution LIMIT 10;


--alter coloumn names
ALTER TABLE air_pollution RENAME COLUMN name TO default_name;
ALTER TABLE air_pollution RENAME COLUMN lat TO latitude;
ALTER TABLE air_pollution RENAME COLUMN lon TO longitude;

--adding a new column for the country
ALTER TABLE air_pollution ADD COLUMN country VARCHAR(255);

-- updating the country column with the extracted country name
UPDATE air_pollution
SET country = TRIM(SPLIT_PART(default_name, ',', LENGTH(default_name) - LENGTH(REPLACE(default_name, ',', '')) + 1));


-- this query retrieves the specific columns (name, aqi, date, and time) from first 10 records from the 'air_pollution' table 
SELECT country, aqi, date, time FROM air_pollution LIMIT 10;

-- finding the location with the highest AQI
SELECT country, aqi, date, time 
FROM air_pollution 
ORDER BY aqi DESC 
LIMIT 1;

-- calculating the average AQI across all locations
SELECT AVG(aqi) AS average_aqi 
FROM air_pollution;

-- listing locations where AQI is above 50
SELECT country, aqi, date, time 
FROM air_pollution 
WHERE aqi > 50 
ORDER BY aqi DESC;

-- calculating average AQI for each unique location
SELECT country, AVG(aqi) AS average_aqi 
FROM air_pollution 
GROUP BY country 
ORDER BY average_aqi DESC;

-- calculating the mode to find out the most frequently occurring AQI value
SELECT aqi AS mode_aqi, COUNT(*) as count
FROM air_pollution
GROUP BY aqi
ORDER BY count DESC, aqi
LIMIT 1;

--median AQI indicates a typical day's air quality, unaffected by extreme outliers.
WITH OrderedAQI AS (
    SELECT aqi,
           ROW_NUMBER() OVER (ORDER BY aqi) AS rn,
           COUNT(*) OVER () AS total_count
    FROM air_pollution
)

SELECT aqi AS median_aqi
FROM OrderedAQI
WHERE rn = CEIL(total_count/2.0);


--average AQI gives an overall sense of air quality but can be skewed by extreme values
SELECT AVG(aqi) AS average_aqi
FROM air_pollution;


--this query gives me a list of the top 10 cities with the worst average air quality. 
--these cities can benefit from increased attention to air pollution sources, 
--stricter regulations, public awareness campaigns, or other interventions to improve air quality and public health.
SELECT 
    TRIM(SPLIT_PART(default_name, ',', 1)) AS city,  -- Extracting city name from the "default_name" column
    AVG(aqi) AS average_aqi
FROM air_pollution
GROUP BY city
ORDER BY average_aqi DESC
LIMIT 10;

--categorize AQI values into different air quality categories
--(Good, Moderate, Unhealthy,) and count how many records fall into each category.SELECT 
    CASE 
        WHEN aqi <= 50 THEN 'Good'
        WHEN aqi <= 100 THEN 'Moderate'
        WHEN aqi <= 150 THEN 'Unhealthy for Sensitive Groups'
        WHEN aqi <= 200 THEN 'Unhealthy'
        ELSE 'Very Unhealthy or Hazardous'
    END AS aqi_category,
    COUNT(*) AS count
FROM air_pollution
GROUP BY aqi_category
ORDER BY count DESC;






