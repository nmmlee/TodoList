const API_KEY = "40f699f2977477e399a0b12e421f9f24";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you Live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weatherContainer = document.getElementById("weather");
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        weatherContainer.innerHTML = `${weather} / ${name}, ${temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);