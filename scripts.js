const key = "X2594FH5NYRTWAZ3GJNCVMJRD";
const link = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");
const currCity = document.querySelector(".thecity");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const currImage = document.querySelector(".icon");
const conditions = document.querySelector(".condition");
const footer = document.querySelector(".footer");

getWeather("New York");

async function getWeather(city) {
    try {
        const response = await fetch(link + city + "?key=" + key);
        let data = await response.json();

        conditions.innerHTML = data.currentConditions.conditions;
        currCity.innerHTML = data.address;
        temp.innerHTML = data.currentConditions.temp + "°F";
        humidity.innerHTML = data.currentConditions.humidity + "%";
        windSpeed.innerHTML = data.currentConditions.windspeed + " mph";
        footer.innerHTML = data.resolvedAddress;

        changeImage(data.currentConditions.icon);
    } catch (error) {
        alert("Location not found!");
    }
}

function searching() {
    const cityData = cityInput.value;

    if (cityData) {
        getWeather(cityData);

        cityInput.value = "";
    } else {
        alert("Please enter a location!")
    }
}

function changeImage(condition) {
    if (condition == 'rain') {
        currImage.src = "images/rain.png";
    } else if (condition == 'snow') {
        currImage.src = "images/snow.png";
    } else if (condition == 'fog') {
        currImage.src = "images/fog.png";
    } else if (condition == 'wind') {
        currImage.src = "images/wind.png";
    } else if (condition == 'cloudy') {
        currImage.src = "images/cloudy.png";
    } else if (condition == 'partly-cloudy-day') {
        currImage.src = "images/day_partial_cloud.png";
    } else if (condition == 'partly-cloudy-night') {
        currImage.src = "images/night_full_moon_partial_cloud.png";
    } else if (condition == 'clear-day') {
        currImage.src = "images/day_clear.png";
    } else if (condition == 'clear-night') {
        currImage.src = "images/night_half_moon_clear.png";
    }
}

searchButton.addEventListener('click', searching);