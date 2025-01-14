import axios from 'axios';

const API_KEY = 'de98638262183af60f758cd4a73fe4d6';

export const fetchweather = async (city) => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}');
    return response.data;
};