# Air Pollution Project

------------------------------------
Team Members:

- Ash (Eimaan) Ejaz
- Tooba Ahmed
- Musab Rahim
- Ayroza Dobson
- Shabana Qureshi
------------------------------------

### Overview

For this project, we created a website to house interactive visualisations of live air quality data.

The data was retreived via API, cleaned in Pandas, and exported to a SQL database for querying.

It was also utilised in JavaScript to create a dashboard using Plotly charts and an interactive map using Leaflet.

The Jquery library was also used to build the website.


### Data Source

![Screenshot 2023-08-13 at 20 28 01](https://github.com/ashejaz/air-pollution-project/assets/127614970/b213b057-34f1-4e66-9c78-a3787646421f)

[AQICN](https://aqicn.org/json-api/doc/) - an online data platform for live air quality data from stations globally. Returns latitude/longitude and Air Quality Index (AQI) data.

Air Quality Index is a measure of air pollutant concentration and as assessment of risk to health. It assigns a numerical value  to air quality based on the following ranges:

![Screenshot 2023-08-13 at 21 06 35](https://github.com/ashejaz/air-pollution-project/assets/127614970/e76c933c-39a8-48c1-b147-ad7aecfbb2c4)

### Data Cleaning

The data was cleaned in Pandas. The cleanup process can be viewed [here](data_cleansing.ipynb).

The cleaned data was exported in both [CSV](data/air_pollution_data.csv) and [JSON](data/air_pollution_data.json) format.

The final dataset contained data for 1261 stations.

### SQL Database

The data was imported into a SQL database, cleaned further and queried. 

![image](https://github.com/ashejaz/air-pollution-project/assets/127614970/061a51e0-1d0c-4702-b673-1d5f801d52a0)

![image (1)](https://github.com/ashejaz/air-pollution-project/assets/127614970/105845a3-c33c-438e-9d13-c805da804825)

The full script can be viewed [here](sql/data_pollution_query.sql).

## Website

The final deployment of our website can be found [here](https://ashejaz.github.io/air-pollution-project/index.html).

HTML files:
- [about.html](about.html)
- [contact.html](contact.html)
- [map.html](map.html)
- [index.html](index.html)

JavaScript files:
- [js folder](js)

CSS files:
- [style.css](style.css)
- [style1.css](style1.css)
- [style2.css](style2.css)

### Main Page

<img width="1039" alt="Screenshot 2023-08-15 at 14 25 02" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/da8a0e01-5ae0-48d1-8ec5-c059fe7875d0">

The main page consists of a menu bar allowing for navigation between pages and a brief introduction to air quality. It also describes how air pollution is a significant concern as it is the 3rd leading cause of death globally.

<img width="1365" alt="Screenshot 2023-08-15 at 16 51 45" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/2b5f093a-2172-4936-96bb-c636d16dd44a">

### Map

A map was created using Leaflet to visualise air quality globally.

![Screenshot 2023-08-13 at 21 07 07](https://github.com/ashejaz/air-pollution-project/assets/127614970/112b1c60-0978-46fd-ad15-a5fc0bcf96d7)

Each circle represents a station, with the colour reflecting the Air Quality Index values based on the following ranges:

![Screenshot 2023-08-13 at 21 08 02](https://github.com/ashejaz/air-pollution-project/assets/127614970/d9b10d46-a03c-4da2-aa55-8a5a0e0cdf9b)

A popup box appears when a circle is clicked, detailing the station information:

![Screenshot 2023-08-13 at 21 07 51](https://github.com/ashejaz/air-pollution-project/assets/127614970/845a1ea1-100e-4a28-b75d-e1e99a037024)

Finaly, the layer control allows users to toggle between different base maps including Street, Topographic and Satellite.

![Screenshot 2023-08-13 at 21 25 27](https://github.com/ashejaz/air-pollution-project/assets/127614970/3c0046e5-e2b0-4922-a13f-58e5dbefc07a)
![Screenshot 2023-08-13 at 21 25 36](https://github.com/ashejaz/air-pollution-project/assets/127614970/cf5b2a15-0551-4b49-bb50-52bdb791cd9e)

### Charts and Dashboard

An interactive dashboard was created to display air quality data when a station is selected from a dropdown list:

<img width="390" alt="Screenshot 2023-08-15 at 16 37 58" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/3317c0ed-2803-4a1c-90be-77491a211065">

<img width="745" alt="Screenshot 2023-08-15 at 16 38 11" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/f217e01e-60a4-4e97-be16-3b578dfb4472">

Finally series of charts were created to calculate and display the most and least polluted cities:

<img width="965" alt="Screenshot 2023-08-15 at 16 38 28" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/589757c4-a8ea-4436-a53b-ca2eeea44e8c">

<img width="967" alt="Screenshot 2023-08-15 at 16 38 36" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/d880b595-a1d7-4afd-ae81-d50335992a07">

<img width="886" alt="Screenshot 2023-08-15 at 16 40 43" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/7c35ab75-f9c1-487b-b8d2-1d5f35d670c5">

### Results

Some of our results can be viewed in tabular format below:

<img width="726" alt="Screenshot 2023-08-15 at 16 42 14" src="https://github.com/ashejaz/air-pollution-project/assets/127614970/fe1e544b-8722-4251-bbbd-b8b9e72c0751">

## References

[AQICN API](https://aqicn.org/json-api/doc/)


