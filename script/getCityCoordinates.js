const API_KEY = "bb216b2195695e40ca7b0877851268d2";

const getCityCoordinates = async (city) => {
    // console.log(city);
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    );
    const data = await response.json();
    // console.log(data);
    // console.log(`Lat: ${data[0].lat}`)
    // console.log(`Lon: ${data[0].lon}`)
    return data[0];
};
// getCityCoordinates("Warszawa");
export {getCityCoordinates};