const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const weather2 = document.querySelector("#weather2");



const getCord = async (city_name) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city_name}&count=10&language=en&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    const lat = data.results[0].latitude;
    const lon = data.results[0].longitude;
    return getWeather(lat, lon);
};

const getWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
    return showWeather(weatherData);
}

const showWeather = (weatherData) => {

    weather.innerHTML =
        `<div>
        <h3>Today Max Temp: ${weatherData.daily.temperature_2m_max[0]} </h3>
    </div>`

    weather2.innerHTML =
        `<div>
         <h3>Today Min Temp: ${weatherData.daily.temperature_2m_min[0]} </h3>
    </div>`
};


form.addEventListener(
    'submit',
    function (event) {
        getCord(search.value);
        search.value = '';
        event.preventDefault();
    })
