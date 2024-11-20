import { getCurrentWeather } from "./getCurrentWeather.js";
const setCurrentWeather = async (cityName) => {
    const data = await getCurrentWeather(cityName);
    const iconElement = document.getElementById("insertSvg");
    const currentTemp = document.getElementById("currentTemp");
    const cityNames = document.getElementById("cityName");
    iconElement.innerHTML = `<img src="../icons/${data.weather[0].icon}.png" alt="Weather Icon" style="max-width: 100px;" class="m-auto">`;
    currentTemp.innerHTML = data.main.temp + "°C";
    cityNames.innerHTML = cityName;
}

export {setCurrentWeather};