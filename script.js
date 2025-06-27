const ciudadPredeterminada = "A coruña";

const cityInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCont = document.querySelector(".weather");
const errorMsg = document.querySelector(".error");

async function buscarClima(ciudad) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Error al obtener el clima: ", error);
	}
}
buscarClima(ciudadPredeterminada);

function updateWeather(data) {
	document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}&deg;C`;
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".humidity").innerHTML = `${data.main.humidity}`;
}
