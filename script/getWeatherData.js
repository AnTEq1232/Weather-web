const API_KEY = "bb216b2195695e40ca7b0877851268d2";
/**
 * Fetches the weather data from the OpenWeatherMap API
 * @param {number} lat The latitude of the location to fetch the data for
 * @param {number} lon The longitude of the location to fetch the data for
 * @returns {Promise<Object>} A Promise that resolves with the weather data
 */
const getWeatherData = async (lat, lon) => {
    // Fetch the weather data
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pl&units=metric&appid=${API_KEY}`
    );

    // Check if the response was successful
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const data = await response.json();

    // Log the data for debugging purposes
    console.log(data);

    // Return the weather data
    return data;
};

// Export the function
export {getWeatherData};
