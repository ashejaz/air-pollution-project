// script.js

// Function to fetch current air pollution data from the Flask API
async function fetchCurrentAirPollutionData() {
    // Send a GET request to the Flask API endpoint
    const response = await fetch('/api/current_air_pollution');

    // Get the JSON response and return it as data
    const data = await response.json();
    return data;
}
x`x`
// Function to create the Plotly chart for air pollution data
function createAirPollutionChart(data) {
    // Extract relevant data for visualization
    const pollutants = ['co', 'no', 'no2', 'o3', 'so2', 'pm2_5', 'pm10', 'nh3'];
    const xData = Object.keys(data.list[0].components).filter(pollutant => pollutants.includes(pollutant));
    const yData = Object.values(data.list[0].components).filter((value, index) => pollutants.includes(xData[index]));

    // Create the Plotly bar chart for air pollution data
    const chartContainer = document.getElementById('chart-container');
    const chartData = [{
        x: xData,
        y: yData,
        type: 'bar',
        marker: { color: 'blue' },
    }];
    const chartLayout = {
        title: 'Current Air Pollution Levels',
        xaxis: { title: 'Pollutants' },
        yaxis: { title: 'Concentration (μg/m3)' },
    };
    Plotly.newPlot(chartContainer, chartData, chartLayout);
}

// Main function to load and update the dashboard
async function initDashboard() {
    // Fetch current air pollution data from the Flask API
    const airPollutionData = await fetchCurrentAirPollutionData();

    // Create the air pollution chart
    createAirPollutionChart(airPollutionData);
}

// Call the initDashboard function when the page is loaded
document.addEventListener('DOMContentLoaded', initDashboard);