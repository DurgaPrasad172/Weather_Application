import React from 'react';
import './WeatherCard.css';


const WeatherCard = ({ weather ,onRemove}) => {
  const { name, main, weather: weatherDetails, wind } = weather;
  const { temp, humidity } = main;
  const { description, icon } = weatherDetails[0];
  const { speed } = wind;
  const date = new Date();

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  let weatherClass = '';
  if (description.includes('sunny')) {
    weatherClass = 'sunny';
  } else if (description.includes('cloud')) {
    weatherClass = 'cloudy';
  } else if (description.includes('rain')) {
    weatherClass = 'rainy';
  } else if (description.includes('snow')) {
    weatherClass = 'snowy';
  }

  return (
    <div className={`weather-card ${weatherClass}`}>
      <div className="weather-bg"></div>
      <h2 className="location">{name}</h2>
      <p className="date-time">{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
      <img src={iconUrl} alt={description} className="weather-icon" />
      <div className="weather-details">
        <p className="temp">
          <span className="icon">🌡️</span> Temperature: {temp}°C
        </p>
        <p className="humidity">
          <span className="icon">💧</span> Humidity: {humidity}%
        </p>
        <p className="wind">
          <span className="icon">💨</span> Wind Speed: {speed} m/s
        </p>
        <p className="description">
          <span className="icon">☁️</span> {description}
        </p>
        <button className="remove-button" onClick={() => onRemove(name)}>Remove</button>
      </div>
    </div>
  );
};

export default WeatherCard;
