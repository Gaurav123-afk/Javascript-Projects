const API_KEY = `bc0aa28279aaabb4bbae4f612f0690db`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
};

const showWeather = (data) => {
    if (data.cod === "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="" alt="">
            <div>
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
        </div>`;
};

form.addEventListener("submit", function (event) {
    getWeather(search.value);
    event.preventDefault();
});
