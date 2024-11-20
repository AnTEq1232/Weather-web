import { getWeatherData } from "./getWeatherData.js";
import { timestampToDate } from "./uniTimestampToDate.js";

const doSmthWithData = async (lat, lon) => {
    try {
        const data = await getWeatherData(lat, lon);
        // console.log(data);
        const newData = {
            ...data,
            list: data.list.map(time => {
                return {
                    ...time,
                    dt: timestampToDate(time.dt)
                };
            })
        };
        // console.log(newData);
        return newData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// doSmthWithData("Warszawa");
export {doSmthWithData};