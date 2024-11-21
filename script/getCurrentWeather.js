const API_KEY = "bb216b2195695e40ca7b0877851268d2";
import { getCityCoordinates } from "./getCityCoordinates.js";
/**
 * Fetches the current weather data from the OpenWeatherMap API
 * @param {string} cityName The name of the city to fetch the data for
 * @returns {Promise<Object>} A Promise that resolves with the current weather data
 */
const getCurrentWeather = async (cityName) => {
    try {
        // Get the coordinates of the city
        const cityData = await getCityCoordinates(cityName);
        const lat = cityData.lat, lon = cityData.lon;

        // Fetch the current weather data
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&units=metric&appid=${API_KEY}`
        );

        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the data for debugging purposes
        console.log(data);

        // Return the 'data' variable
        return data; 
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Fetch error:', error);

        // Re-throw the error to be handled by the calling function
        throw error; 
    }
}

export { getCurrentWeather };