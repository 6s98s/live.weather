import axios from 'axios';

const API_KEY = 'de98638262183af60f758cd4a73fe4d6';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
    
    if (!city) {
        throw new Error('도시 이름을 입력해주세요.');
    }

    try {
        const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('도시를 찾을 수 없습니다. 도시 이름을 재확인 해주세요.');
        } else {
            throw new Error('날씨 데이터를 가져오는 중 오류가 발생하였습니다.');
        }
    }
}