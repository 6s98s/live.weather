import { useState, useEffect } from 'react';
import { getWeather } from '../api/weather';

const useWeather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getWeather();
            setWeather(data);
        }
        fetchWeather();
    }, []);
    return weather;
};

export default useWeather;