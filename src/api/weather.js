import axios from 'axios';

const API_KEY = `de98638262183af60f758cd4a73fe4d6`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=35.8714&lon=128.6014&appid=${API_KEY}`;

export const getWeather = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;
    } catch (error) {
        console.error(error);
    }
}