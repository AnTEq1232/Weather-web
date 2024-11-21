import { getCurrentWeather } from "./getCurrentWeather.js";

const setCurrentWeather = async (cityName) => {
    // Fetch the current weather data for the given city name
    const data = await getCurrentWeather(cityName);

    // Get the HTML elements where we will display the data
    const iconElement = document.getElementById("insertSvg");
    const currentTemp = document.getElementById("currentTemp");
    const cityNames = document.getElementById("cityName");

    // Set the weather icon in the page
    iconElement.innerHTML = `<img src="../icons/${data.weather[0].icon}.png" alt="Weather Icon" style="max-width: 100px;" class="m-auto">`;
    
    // Set the current temperature in the page
    currentTemp.innerHTML = data.main.temp + "°C";
    
    // Set the city name in the page
    cityNames.innerHTML = cityName;
}

export { setCurrentWeather };
