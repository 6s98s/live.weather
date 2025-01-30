import React from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  return (
    <div>
      <h3>대구의 날씨 님버스와 함께</h3>
      <Weather />
      <WeatherDis />
    </div>
  );
};

export default Weather;