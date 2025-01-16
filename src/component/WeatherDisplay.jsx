import React from 'react';

const WeatherDisplay = ({ weather }) => {
    if (!data) return null;

    const { name, main, weather } = data;
    const temperature = main.temp - 273.15;

    return (
        <div>
            <h2>{name}</h2>
            <p>Temperature: {temperature}</p>
            <p>Condition: {weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;