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

		if (!response.ok) {
			throw new Error("Ciudad no encontrada");
		}

		const data = await response.json();
		console.log(data);
		updateWeather(data);
	} catch (error) {
		console.error("Error al obtener el clima: ", error.message);
		weatherCont.style.display = "none";
		errorMsg.style.display = "block";
	}
}
buscarClima(ciudadPredeterminada);

function updateWeather(data) {
	errorMsg.style.display = "none";
	document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}&deg;C`;
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
	document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

	const weatherIcons = {
		Clear: "images/clear.png",
		Snow: "images/snow.png",
		Rain: "images/rain.png",
		Clouds: "images/clouds.png"
	};

	weatherIcon.src = weatherIcons[data.weather[0].main] || "images/rain.gif";
	weatherCont.style.display = "block";
}

//Busqueda

function search() {
	const ciudad = cityInput.value.trim();
	if (ciudad !== "") {
		buscarClima(ciudad);
		cityInput.value = "";
	}
}

searchBtn.addEventListener("click", search);

cityInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		search();
	}
});
