// create api request here
import { processApiController } from "./processApi";

const apiTemplate = {
    base: 'http://api.weatherapi.com/v1/forecast.json?key=291fefa5461a427285a150428240302&q=',

    userLocation: 'chicago',

    secondBase: '&days=3&aqi=no&alerts=no'
}


// eslint-disable-next-line import/prefer-default-export
export const weatherRequest = async function () {
    console.log(`${apiTemplate.base}${apiTemplate.userLocation}${apiTemplate.secondBase}`);

    const response = await fetch(`${apiTemplate.base}${apiTemplate.userLocation}${apiTemplate.secondBase}`,
    {mode: 'cors'})

    if (!response.ok) {
        throw new Error('Request failed');
    }
    console.log(response)

    // maybe implement a try and catch here!!:

    const weatherData = await response.json();
    console.log(weatherData)

    processApiController(weatherData);
}


// create userForm logic here
const searchBar = document.getElementById('search-form');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('weather searched');
})
