import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const temperature = (main.temp - 273.15).toFixed(2);

  return (
    <div>
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {weatherDetails[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;