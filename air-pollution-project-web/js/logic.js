// Create map object
let myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 2
});

// Create tile layers
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let satellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a> contributors'
});

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create base maps
let baseMaps = {
  "Street": street,
  "Satellite": satellite,
  "Topographic": topo
};

// Add tile layers to the map
street.addTo(myMap);

// Function to get the color based on AQI
function getColor(aqi) {
  if (aqi <= 50) {
      return '#00FF00'; // Green
  } else if (aqi <= 100) {
      return '#FFFF00'; // Yellow
  } else if (aqi <= 150) {
      return '#FFA500'; // Orange
  } else if (aqi <= 200) {
      return '#FF4500'; // Red
  } else if (aqi <= 300) {
      return '#99004C'; // Purple
  } else {
      return '#7E0023'; // Maroon
  }
}

// Fetch air quality data
d3.json('https://api.waqi.info/v2/map/bounds?latlng=-90,-180,90,180&networks=all&token=4a880169279a5068a1ce72938e02e43e7510290b')
  .then((data) => {
      data.data.forEach((station) => {
          const lat = station.lat;
          const lon = station.lon;
          const aqi = parseFloat(station.aqi);

          // Check if AQI is a valid number
          if (!isNaN(aqi)) {
              // Create the marker with a popup containing additional information
              const marker = L.circleMarker([lat, lon], {
                  radius: 10, // Constant size
                  fillColor: getColor(aqi),
                  color: 'black',
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.75,
              }).addTo(myMap);

              // Determine AQI level of concern
              let levelOfConcern;
              if (aqi <= 50) {
                  levelOfConcern = 'Good';
              } else if (aqi <= 100) {
                  levelOfConcern = 'Moderate';
              } else if (aqi <= 150) {
                  levelOfConcern = 'Unhealthy for Sensitive Groups';
              } else if (aqi <= 200) {
                  levelOfConcern = 'Unhealthy';
              } else if (aqi <= 300) {
                  levelOfConcern = 'Very Unhealthy';
              } else {
                  levelOfConcern = 'Hazardous';
              }

              // Generate the popup content
              const popupContent = `
                  <b>AQI:</b> ${aqi}<br/>
                  <b>Level of Concern:</b> ${levelOfConcern}<br/>
                  <b>Station:</b> ${station.station.name}<br/>
                  <b>Time:</b> ${new Date(station.station.time)}
              `;

              // Bind the popup to the marker
              marker.bindPopup(popupContent);
          }
      });
  });

// Create a map legend
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  const aqiLevels = [0, 50, 100, 150, 200, 300];
  const colors = ['#00FF00', '#FFFF00', '#FFA500', '#FF4500', '#99004C', '#7E0023'];

  // Loop through the AQI levels and generate a label with a colored square for each
  for (let i = 0; i < aqiLevels.length; i++) {
      div.innerHTML +=
          '<div><i style="background:' + colors[i] + '"></i>' +
          aqiLevels[i] + (aqiLevels[i + 1] ? '&ndash;' + aqiLevels[i + 1] : '+') +
          '</div>';
  }

  return div;
};

// Add the legend to the map
legend.addTo(myMap);

// Create a layer control and add it to the map
L.control.layers(baseMaps).addTo(myMap);
