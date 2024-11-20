const API_KEY = "bb216b2195695e40ca7b0877851268d2";

const getWeatherData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pl&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
export {getWeatherData};