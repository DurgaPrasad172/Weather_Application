
import React, { useState } from 'react';
import { fetchWeather } from './api';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

function App() {

  const [weather, setWeather] = useState([]);  
  const [error, setError] = useState(null);   
  const [darkMode, setDarkMode] = useState(false);  

  const handleSearch = async (location) => {
    setError(null); 
    try {
      const data = await fetchWeather(location);
      setWeather((prevWeather) => [...prevWeather, data]);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Location Not Found.');
      } else {
        setError('An error occurred. Please try again.');
      }
      setWeather([]);  
    }
  };

  const handleRemove = (location) => {
    setWeather(weather.filter(item => item.name.toLowerCase() !== location.toLowerCase()));
  };

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <ToggleSwitch toggleDarkMode={toggleDarkMode} />
      <SearchBar onSearch={handleSearch} />
      {error && <div className="error-message">{error}</div>}
      <div className="weather-cards-container">
        {weather.map((weatherData, index) => (
          <WeatherCard key={index} weather={weatherData} darkMode={darkMode} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default App;
