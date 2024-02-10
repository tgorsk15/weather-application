// create api request here
import { processApiController } from "./processApi";
import { controllerDOM } from "./userInterface";

const apiTemplate = {
    base: 'http://api.weatherapi.com/v1/forecast.json?key=291fefa5461a427285a150428240302&q=',

    userLocation: 'chicago',

    secondBase: '&days=3&aqi=no&alerts=no'
}

// possibly will help change over data each time a new location is searched:
let activeUrl = ''
let activeWeatherData = ''

// let abortController;


// eslint-disable-next-line import/prefer-default-export
export const weatherRequest = async function () {
    // abortController = new AbortController();
    // const abortSignal = abortController.signal;

    activeUrl = `${apiTemplate.base}${apiTemplate.userLocation}${apiTemplate.secondBase}`
    console.log(activeUrl)

    const response = await fetch(`${apiTemplate.base}${apiTemplate.userLocation}${apiTemplate.secondBase}`,
    {mode: 'cors'
    // signal: abortSignal
    })

    if (!response.ok) {
        throw new Error('Request failed');
    }
    console.log(response)

    // maybe implement a try and catch here!!:

    const weatherData = await response.json();
    activeWeatherData = weatherData;
    console.log(activeWeatherData);

    processApiController(activeWeatherData);
}


const deleteRequest = async function () {

    console.log(activeUrl);

    const deleteRes = await fetch(`${activeUrl}`, 
    { mode: 'cors', method: 'DELETE'})

    if (!deleteRes.ok) {
        throw new Error('Delete Request failed');
    }
    console.log(deleteRes);
    const deleteData = await deleteRes.json();
    console.log(deleteData);

    console.log('delete successful');
    activeWeatherData = deleteRes;


    console.log(activeWeatherData)
    
}



// create userForm logic here
const searchBar = document.getElementById('search-bar');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', (e) => {
    // eventually put clearWeatherCard function in here
    // needs to delete Hour Forecast blocks, as these will be re-made
    // ... other information can just be replaced

    // also have to change the value of 'userLocation' here, so that 
    // the new API request uses what the user typed in
    
    e.preventDefault();

    const DOMRun2 = controllerDOM();
    DOMRun2.deleteForecastBoxes();

    console.log(searchBar.value);
    apiTemplate.userLocation = searchBar.value;
    
    // looking like its not possible to actually DELETE the memory of
    // an API request ... so maybe just simply overriding it will suffice
    // ... also have to set up a deleteDOM function
    console.log('weather searched');
    // deleteRequest();
    // weatherRequest();
})


