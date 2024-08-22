import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ weather }) => {
  if (!weather) return <p>No Data</p>;

  return (
    <div className="weather-details">
      <h2>Details</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Weather</th>
            <th>Humidity (%)</th>
            <th>Wind Speed (m/s)</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weather.name}</td>
            <td>{weather.main.temp}</td>
            <td>{weather.weather[0].description}</td>
            <td>{weather.main.humidity}</td>
            <td>{weather.wind.speed}</td>
            <td>{new Date(weather.dt * 1000).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDetails;
