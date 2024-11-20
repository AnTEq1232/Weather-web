import { getDailyWeather } from "./getDailyWeather.js";
import { setCurrentWeather } from "./setCurrentWeather.js";
import { updateWeatherData } from "./setnext24h.js";
const setDataInPage = () => {
    const city = document.getElementById('citySearch').value;
    if (city !== "") {
        localStorage.setItem('city', city);
        setCurrentWeather(city); 
        updateWeatherData(city);
        getDailyWeather(city);
    } else {
        setCurrentWeather("Warszawa"); 
        updateWeatherData("Warszawa");
        getDailyWeather("Warszawa");
    }
}

window.onload = function() {
    if (localStorage.getItem('city') !== null) {
        setCurrentWeather(localStorage.getItem('city')); 
        updateWeatherData(localStorage.getItem('city'));
        getDailyWeather(localStorage.getItem('city'));
    } else {
        setCurrentWeather("Warszawa"); 
        updateWeatherData("Warszawa");
        getDailyWeather("Warszawa");
    }
}

document.getElementById('searchButton').onclick = setDataInPage;
