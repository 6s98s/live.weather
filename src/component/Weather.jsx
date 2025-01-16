import React from 'react';
import useWeather from '../hooks/useWeather';
import WeatherDisplay from './WeatherDisplay';

const Weather = () => {
    const weather = useWeather();

    return (
        <div>
            <h3>오늘의 대구 날씨 님버스가 함께</h3>
            <WeatherDisplay weather={weather} />
        </div>
    );
};

export default Weather;