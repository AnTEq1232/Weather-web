import { setCurrentWeather } from "./setCurrentWeather.js";
import { updateWeatherData } from "./setnext24h.js";
const setDataInPage = () => {
    const city = document.getElementById('citySearch').value;
    if (city !== "") {
        localStorage.setItem('city', city);
        setCurrentWeather(city); 
        updateWeatherData(city);
    } else {
        setCurrentWeather("Warszawa"); 
        updateWeatherData("Warszawa");
    }
}

window.onload = function() {
    if (localStorage.getItem('city') !== null) {
        setCurrentWeather(localStorage.getItem('city')); 
        updateWeatherData(localStorage.getItem('city'));
    } else {
        setCurrentWeather("Warszawa"); 
        updateWeatherData("Warszawa");
    }
}

document.getElementById('searchButton').onclick = setDataInPage;
