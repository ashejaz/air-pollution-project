# app.py

# Import required libraries
from flask import Flask, render_template, jsonify
import sqlite3
import pandas as pd
import requests

# Create a Flask app
app = Flask(__name__)

# API endpoint to fetch current air pollution data
@app.route('/api/current_air_pollution')
def current_air_pollution():
    # Replace lat and lon with the desired latitude and longitude
    lat = 50
    lon = 50

    # Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    api_key = 'be3b03e0d5284396dc3910dee90749b6'

    # API URL to fetch current air pollution data based on latitude, longitude, and API key
    api_url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={api_key}"

    # Send a GET request to the API and get the JSON response
    response = requests.get(api_url)
    data = response.json()

    # Return the JSON response as the API endpoint's result
    return jsonify(data)

# Run the Flask app if this script is executed
if __name__ == '__main__':
    app.run(debug=True)