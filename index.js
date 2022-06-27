const key = "c4e5177d9b4e3609676c3fdf074d8f03"

let cityID = "5780993"

let response = fetch("https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + key)
.then((response) => {
    return response.json()
}).then((response) => {
    displayWeather(response)
})

function displayWeather(response){
    console.log(response)
    document.querySelector(".location").innerHTML = "Current weather for " + response.name + ":"
    document.querySelector(".condition").innerHTML = "Conditions: " + response.weather[0].description
    document.querySelector(".temp").innerHTML = "Temperature: " + (9.0 * (parseFloat(response.main.temp) - 273.15)/5.0 + 32).toFixed(0) + "&degF"
    document.querySelector(".humidity").innerHTML = "Humidity: " + response.main.humidity + "%"
    document.querySelector(".wind").innerHTML = "Wind speed: " + response.wind.speed + " mph"
}