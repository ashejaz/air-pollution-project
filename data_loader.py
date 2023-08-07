# data_loader.py

import sqlite3
import pandas as pd

# Load your air pollution data into a pandas DataFrame (replace with your dataset)
data = pd.read_csv('air_pollution_data.csv')

# Create a connection to the SQLite database
connection = sqlite3.connect('air_pollution_data.db')

# Save the data into the database (replace 'air_pollution' with your table name)
data.to_sql('air_pollution', connection, if_exists='replace', index=False)

# Close the connection
connection.close()