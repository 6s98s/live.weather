const getweather = async (lat, lon) => {
    const API_KEY = `de98638262183af60f758cd4a73fe4d6`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_KEY}`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(``);
        }
        
        const data = response.json();

    } catch (error) {
        console.log('날씨 정보를 가져오는 데 오류가 발생했습니다:', error);
    }
};

export default getweather;