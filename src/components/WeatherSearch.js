import React, { useState } from 'react';
import axios from 'axios';
import './WeatherSearch.css';
import WeatherDetails from './WeatherDetails';
import CityList from './CityList';

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = '79c80dc9234ccb00573c58f6cd2d7586'; // Replace with your OpenWeatherMap API key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      setWeather(response.data);
      setCities(prevCities => [...new Set([city, ...prevCities])]); // Add city to list and ensure no duplicates
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  const handleSelectCity = async (selectedCity) => {
    setCity(selectedCity);
    await handleSearch();
  };

  return (
    <div className="weather-search">
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="city-details">
        <CityList cities={cities} onSelectCity={handleSelectCity} />
        <WeatherDetails weather={weather} />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WeatherSearch;
