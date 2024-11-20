const apiKey = "e26e9de1c2edfa4b1156a14304be6213";

function GetData(){
    // Get the city name from the input field
	const cityNotEdited = document.getElementById("city").value;
	const city = cityNotEdited[0].toUpperCase() + cityNotEdited.substring(1);
	// Clear the input field
	document.getElementById("city").value = "";
	
	// Store the city name in local storage
	localStorage.setItem("lastCity", city);
	
	// Fetch the coordinates for the specified city
	getCityCoordinates(city);
}

/**
 * Pobiera współrzędne geograficzne miasta
 * @param {string} cityName - nazwa miasta
 * @param {string} [stateCode=""] - kod stanu
 * @param {string} [countryCode=""] - kod państwa
 * @param {number} [limit=""] - liczba wyników
 */
async function getCityCoordinates(
	cityName,
	stateCode = "",
	countryCode = "",
	limit = ""
) {
	const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;

	try {
		const response = await fetch(geoURL);

		if (!response.ok)
			throw new Error(`HTTP error! status: ${response.status}`);

		const data = await response.json();
		console.log("Pełna odpowiedź z API (współrzędne miasta):", data);

		if (data.length === 0) {
			console.log(`Brak wyników dla lokalizacji: ${cityName}`);
			return;
		}

		const lat = data[0].lat;
		const lon = data[0].lon;
		console.log(`Zaokrąglone współrzędne miasta ${cityName}:`);
		console.log(`Szerokość geograficzna: ${lat}`);
		console.log(`Długość geograficzna: ${lon}`);

		// Pobiera dane o zanieczyszczeniu powietrza
		getCurrentWeatherData(lat,lon);
	} catch (error) {
		console.log("Błąd w pobieraniu współrzędnych miasta:", error);
	}
}

async function getCurrentWeatherData(lat, lon) {
    const getWeatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const responseCurrentWeather = await fetch(getWeatherDataURL);

        if (!responseCurrentWeather.ok)
            throw new Error(`HTTP error! status ${responseCurrentWeather.status}`);

        const dataCurrentWeather = await responseCurrentWeather.json();

        console.log("Pełna odpowiedź z API (dane pogodowe):", dataCurrentWeather);

        if (!dataCurrentWeather.list || dataCurrentWeather.list.length === 0) {
            console.log("Brak wyników dla lokalizacji");
            return;
        }

        // Iteracja przez prognozy pogodowe
        dataCurrentWeather.list.forEach((forecast) => {
            const date = new Date(forecast.dt * 1000); // Konwersja UNIX timestamp na Date
            const formattedTime = date.toLocaleTimeString("pl-PL", {
                hour: "2-digit",
                minute: "2-digit",
            });
            const formattedDate = date.toLocaleDateString("pl-PL", {
                weekday: "long",
                day: "numeric",
                month: "long",
            });

            console.log(`Data: ${formattedDate}, Godzina: ${formattedTime}`);
        });
    } catch (error) {
        console.log("Błąd w pobieraniu danych pogodowych:", error);
    }
}

