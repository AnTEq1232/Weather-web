import {doSmthWithData} from "./getImportantData.js";
import { getCityCoordinates } from "./getCityCoordinates.js";
/**
 * A function that updates the weather data for the next 24h
 * @param {string} cityName The name of the city to update the data for
 * @returns {undefined}
 */
const updateWeatherData = async (cityName) => {
    // Get the coordinates of the city
    const cityData = await getCityCoordinates(cityName);
    const data = await doSmthWithData(cityData.lat, cityData.lon);

    // Get the list of weather data
    const dataList = data.list;

    // Loop through the data and set it in the page
    for (let i = 0; i < 8; i++) {
        const iconSrc = `../icons/${dataList[i].weather[0].icon}.png`;
        const img = `<img src="${iconSrc}" alt="Weather Icon" style="max-width: 100px;" class="m-auto">`;

        // Set the hour, icon and temperature for each data point
        document.getElementById(`hour${i+1}`).innerHTML = dataList[i].dt;
        document.getElementById(`iconWeatherTime${1+i}`).innerHTML = img;
        document.getElementById(`temp${i+1}`).innerHTML = dataList[i].main.temp + "°C";
    }
};

export { updateWeatherData };

