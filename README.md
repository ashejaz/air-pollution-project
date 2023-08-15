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

### Data Cleaning

The data was cleaned in Pandas. The cleanup process can be viewed [here](data_cleansing.ipynb).

The cleaned data was exported in both [CSV](data/air_pollution_data.csv) and [JSON](data/air_pollution_data.json) format.

The final dataset contained data for 1261 stations.

### SQL Database

The data was imported into a SQL database, cleaned further and queried. The full script can be viewed [here](sql/data_pollution_query.sql).

## Website

The final deployment of our website can be found [here](https://ashejaz.github.io/air-pollution-project/index.html).
The menu bar allows for navigation between pages.

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

### Map

The Leaflet map features all 

![Screenshot 2023-08-13 at 21 07 07](https://github.com/ashejaz/air-pollution-project/assets/127614970/112b1c60-0978-46fd-ad15-a5fc0bcf96d7)





