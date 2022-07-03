import initConsumeShazam from "./consume-shazam.js";

export default function initConsumeWeather() {
    const openWeatherKey = '';

    const btn = document.querySelector('[data-btn]');
    const x = document.getElementById("weather");

    function getPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`)
        .then(response => response.json())
        .then(r => {
            const city = r.name;
            const country = r.sys.country;
            const temp = Math.round(r.main.temp);
            const feels = Math.round(r.main.feels_like);
            x.innerHTML = `<h4>${city}, ${country}</h4> <span>Temperatura: ${temp} °C</span><br> <span>Sensação: ${feels}°C</span>`;
            
            let genre;
            if(temp < 16) 
                genre = 'ROCK';
            if(temp > 16 && temp < 24)
                genre = 'ALTERNATIVE';
            if(temp > 24 && temp < 32)
                genre = 'POP';
            if(temp > 32)
                genre = 'DANCE';
            initConsumeShazam(genre)
        });
    }

    function errorGetPosition(error) {
        x.innerHTML = "Você precisa autorizar a localização em seu navegador";
    }

    btn.addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(getPosition, errorGetPosition);
    });
}
