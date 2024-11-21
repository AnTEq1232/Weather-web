import { getWeatherData } from "./getWeatherData.js";
import { timestampToDate } from "./uniTimestampToDate.js";
/**
 * This function takes latitude and longitude as parameters and fetches data from OpenWeatherMap API
 * It then transforms the data by adding a new property to each object in the list called 'dt' which is a Date object
 * It then returns the transformed data or logs an error if there is one
 * @param {number} lat - latitude
 * @param {number} lon - longitude
 * @returns {Promise<Object>} - transformed data
 */
const doSmthWithData = async (lat, lon) => {
    try {
        // fetches data from OpenWeatherMap API
        const data = await getWeatherData(lat, lon);
        // transforms the data
        const newData = {
            ...data,
            list: data.list.map(time => {
                return {
                    // adds a new property to each object in the list called 'dt' which is a Date object
                    ...time,
                    dt: timestampToDate(time.dt)
                };
            })
        };
        // returns the transformed data
        return newData;
    } catch (error) {
        // logs an error if there is one
        console.error('Error fetching data:', error);
    }
}
// example of how to use the function
// doSmthWithData("Warszawa");
export {doSmthWithData};
