import axios from 'axios';

export const fetchWeather = async (location) => {
  const apiKey = '2d4c446ec99ae3567ee71b5dde3f5f28'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      
      throw error;
    } else if (error.request) {
      
      throw new Error('Network error. Please try again.');
    } else {
      
      throw new Error('Error occurred. Please try again.');
    }
  }
};
