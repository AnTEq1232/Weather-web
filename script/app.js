/**
 * The main script for the Weather App
 * 
 * This script is responsible for loading the correct city's data when the page is loaded,
 * and for updating the page when the user searches for a new city.
 * 
 * @version 1.0.0
 */
import { getDailyWeather } from "./getDailyWeather.js";
import { setCurrentWeather } from "./setCurrentWeather.js";
import { updateWeatherData } from "./setnext24h.js";
import { setSun } from "./setSun.js";

/**
 * A function that sets the data in the page
 * @param {string} city The name of the city to show the data for
 */
const setDataInPage = (city) => {
    localStorage.setItem('city', city);
    setCurrentWeather(city); 
    updateWeatherData(city);
    getDailyWeather(city);
    setSun(city);
};

/**
 * A function that is called when the page is loaded
 * If there is a city in the local storage, it loads the data for that city,
 * otherwise it loads the data for Warszawa
 */
window.onload = function() {
    if (localStorage.getItem('city') !== null) {
        setDataInPage(localStorage.getItem('city'));
    } else {
        setDataInPage("Warszawa");
    }
};

/**
 * A function that is called when the user clicks the search button
 * It gets the city from the search input and calls the setDataInPage function
 */
document.getElementById('searchButton').onclick = () => {
    const city = document.getElementById('citySearch').value;
    if (city !== "") {
        setDataInPage(city);
    } else {
        setDataInPage("Warszawa");
    }
};

