const API_KEY = "bb216b2195695e40ca7b0877851268d2";
import { getCityCoordinates } from "./getCityCoordinates.js";
const getCurrentWeather = async (cityName) => {
    try {
        const cityData = await getCityCoordinates(cityName);
        const lat = cityData.lat, lon = cityData.lon;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // console.log(data);
        return data; // Corrected line: Return the 'data' variable
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error to be handled by the calling function
    }
}
export { getCurrentWeather };