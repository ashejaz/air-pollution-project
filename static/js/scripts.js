// Fetch air quality data using D3
d3.json('https://api.waqi.info/v2/map/bounds?latlng=-90,-180,90,180&networks=all&token=4a880169279a5068a1ce72938e02e43e7510290b')
  .then((data) => {
    createDropdown(data);
    createTop5Charts(data);
  })
  .catch((error) => {
    console.error("Error fetching air quality data:", error);
  });

// Create dropdown list of station names
function createDropdown(data) {
  const stationDropdown = document.getElementById("stationDropdown");
  const stationNames = data.data.map(station => station.station.name);

  stationNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    stationDropdown.appendChild(option);
  });

  stationDropdown.addEventListener("change", (event) => {
    const selectedStation = event.target.value;
    const station = data.data.find(station => station.station.name === selectedStation);

    if (station) {
      displayStationInfo(station);
    }
  });
}

// Display station information
function displayStationInfo(station) {
  const stationInfoBox = document.getElementById("stationInfo");
  stationInfoBox.innerHTML = `
    <h2>Station Information</h2>
    <p><strong>Station:</strong> ${station.station.name}</p>
    <p><strong>Latitude:</strong> ${station.lat}</p>
    <p><strong>Longitude:</strong> ${station.lon}</p>
    <p><strong>Air Quality Index (AQI):</strong> ${station.aqi}</p>
  `;
}


// Create top 5 most and least polluted stations charts using Plotly
function createTop5Charts(data) {
  const mostPollutedStations = data.data
    .sort((a, b) => b.aqi - a.aqi)
    .slice(0, 5);
  
  const leastPollutedStations = data.data
    .sort((a, b) => a.aqi - b.aqi)
    .slice(0, 5);
  
  const mostPollutedNames = mostPollutedStations.map(station => station.station.name);
  const mostPollutedAQI = mostPollutedStations.map(station => station.aqi);
  
  const leastPollutedNames = leastPollutedStations.map(station => station.station.name);
  const leastPollutedAQI = leastPollutedStations.map(station => station.aqi);
  
  const traceMost = {
    x: mostPollutedNames,
    y: mostPollutedAQI,
    type: 'bar',
    name: 'Most Polluted',
    marker: { color: 'red' }
  };
  
  const traceLeast = {
    x: leastPollutedNames,
    y: leastPollutedAQI,
    type: 'bar',
    name: 'Least Polluted',
    marker: { color: 'green' }
  };
  
  const layoutMost = {
    title: '5 Most Polluted Stations',
    xaxis: { title: 'Station Name' },
    yaxis: { title: 'Air Quality Index (AQI)' }
  };
  
  const layoutLeast = {
    title: '5 Least Polluted Stations',
    xaxis: { title: 'Station Name' },
    yaxis: { title: 'Air Quality Index (AQI)' }
  };
  
  const dataMost = [traceMost];
  const dataLeast = [traceLeast];
  
  Plotly.newPlot('top5MostPolluted', dataMost, layoutMost);
  Plotly.newPlot('top5LeastPolluted', dataLeast, layoutLeast);
}
