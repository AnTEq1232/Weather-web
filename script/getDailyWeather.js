import { getCityCoordinates } from "./getCityCoordinates.js";
import { doSmthWithData } from "./getImportantData.js";

const getDailyWeather = async (cityName) => {
    const d = new Date();
    const cityData = await getCityCoordinates(cityName);
    const lat = cityData.lat, lon = cityData.lon;
    const data = await doSmthWithData(lat, lon);
    console.log(data);
    let almostData = [];
    for (let i = 0; i < data.list.length; i++) {
        if (i%8 === 0 && i !== 0) {
            almostData.push(data.list[i]);
        }
    }
    const nowData = almostData;
    console.log(nowData);
    for (let i = 0; i < nowData.length; i++) {
        document.getElementById(`day${i+1}`).innerHTML = d.getDate()+i+1 + `.` + d.getMonth();
        document.getElementById(`tempday${i+1}`).innerHTML = `` + nowData[i].main.temp + "°C";
        const img = `<img src="../icons/${nowData[i].weather[0].icon}.png" alt="Weather Icon" style="max-width: 100px;" class="m-auto">`;
        document.getElementById(`imgadd${1+i}`).innerHTML = img;
    }
};

export { getDailyWeather };