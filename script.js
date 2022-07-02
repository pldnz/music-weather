const openWeatherKey = '';

const btn = document.querySelector('[data-btn]');
const x = document.getElementById("demo");


function getPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`)
    .then(response => response.json())
    .then(r => {
        console.log(r);
        console.log(r.name);
        console.log(r.sys.country);
        console.log(r.main.temp);
        console.log(r.main.feels_like);
    });
}

btn.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(getPosition);
});