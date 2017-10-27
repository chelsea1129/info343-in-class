// @ts-check
"use strict";

const LOCATION_API = "https://freegeoip.net/json/";
// using my IP address to figure out where I am. 
// how to fetch live-data dynamically from the web and render that on screen
// use fetch API

//replace `{latitude}` and `{longitude}`
const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=c2072f8cb6d9c7971cff7c662c5940c6&lat={latitude}&lon={longitude}"
//replace {icon}
const ICON_URL = "http://openweathermap.org/img/w/{icon}.png"

const ERROR_ALERT = document.querySelector("#error-alert");

//TODO: fetch from Location API to get lat/lng
//and then fetch Weather API for that lat/lng.
//Render results to the page, or handle errors

function handleError(err){
    console.error(err); // but users can't see it
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove("d-none"); // make the error visible. What's classlist?
}

function handleResponse(response){
    // we will get back response object when we successfully fetched data
    console.log("got response", response);
    if(response.ok){
        return response.json();

    } else {
        return response.text()
            .then(function(message){
                throw new Error(message);
            })
    }

}

function fetchWeather(data){
    console.log(data);
    let latitude = data.latitude;
    let longitude = data.longitude;
    let url = WEATHER_API.replace("{latitude}", latitude)
            .replace("{longitude}", longitude);
    return fetch(url);
}

function renderWeather(data){
    console.log(data);
    let span = document.querySelector("#temp");
    span.textContent = data.main.temp;

    if(data.weather && data.weather[0]){
        let conditions = data.weather[0];
        document.querySelector("#description")
            .textContent = conditions.description;
        let img = document.querySelector("#weather-icon")
        img.src = ICON_URL.replace("{icon}", conditions.icon);
        img.alt = conditions.description;
    }
}

fetch(LOCATION_API)
    // promise is either in a pending state, or in a resolve state, or in a rejected state
    // fetching data is always done asychroniously. next line will run immediately before the data comes back
    // thus it returns a promise object to register a callback function, .then method handles the call when successful response returns
    .then(handleResponse)
    .then(fetchWeather)
    .then(handleResponse)
    .then(renderWeather)
    .catch(handleError);

console.log("next line after fetch executes immediately!")