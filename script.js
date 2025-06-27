const apiKey = "530e63a6854ba2a466b4da293a74575e";
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
