import React from 'react';
import './CityList.css';

const CityList = ({ cities, onSelectCity }) => {
  return (
    <div className="city-list">
      <h2>City List</h2>
      {cities.length === 0 ? (
        <p>No Data</p>
      ) : (
        <ul>
          {cities.map((city, index) => (
            <li key={index} onClick={() => onSelectCity(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityList;
