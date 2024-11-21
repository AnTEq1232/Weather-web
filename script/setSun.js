import { getCurrentWeather } from "./getCurrentWeather.js";
import { timestampToDate } from "./uniTimestampToDate.js";
const setSun = async (cityName) => {
    const data = await getCurrentWeather(cityName);
    const sunrise = data.sys.sunrise * 1000; // Convert from seconds to milliseconds
    const sunset = data.sys.sunset * 1000; // Convert from seconds to milliseconds
    const now = Date.now(); // Current time in milliseconds

    // Calculate percentage of daylight passed
    let percentage = 0;
    if (now >= sunrise && now <= sunset) {
        // Calculate percentage of daylight passed
        const totalDayDuration = sunset - sunrise;
        const elapsedTime = now - sunrise;
        percentage = (elapsedTime / totalDayDuration) * 100;
    } else if (now > sunset) {
        // After sunset
        percentage = 100;
    }

    // Set CSS variable in the root of the document
    const root = document.documentElement;
    root.style.setProperty('--sun-position', `${percentage.toFixed(2)}%`);

    // Trigger animation on the .progressed-bar element
    const progressedBar = document.querySelector('.progressed-bar');
    if (progressedBar) {
        // Remove and re-add the class to restart the animation
        progressedBar.classList.remove('animate-sun');
        void progressedBar.offsetWidth; // Trigger reflow
        progressedBar.classList.add('animate-sun');
    }

    // Update the display with the new values
    document.getElementById("sunrise").innerHTML = timestampToDate(sunrise);
    document.getElementById("sunset").innerHTML = timestampToDate(sunset);
};



export { setSun };