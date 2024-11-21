const API_KEY = "bb216b2195695e40ca7b0877851268d2";

/**
 * Get city coordinates from OpenWeatherMap API
 * @param {string} city - name of the city
 * @returns {Promise<Object>} - Promise that resolves with an object containing city coordinates
 */
const getCityCoordinates = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data[0];
};

export {getCityCoordinates};
