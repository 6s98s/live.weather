const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const lat = 35.8714;
const lon = 128.6014;

export const getWeather = async () => {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
}