const getweather = async (lat, lon) => {
    const API_KEY = `de98638262183af60f758cd4a73fe4d6`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_KEY}`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(``);
        }
        
        const data = response.json();

        console.log(`도시: ${data.name}`);
        console.log(`날씨: ${data.weather[0].description}`);
        console.log(`기온: ${data.main.temp}°C`);
        console.log(`습도: ${data.main.humidity}%`);
        console.log(`풍속: ${data.wind.speed} m/s`);

    } catch (error) {
        console.log('날씨 정보를 가져오는 데 오류가 발생했습니다:', error);
    }
};