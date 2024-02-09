// create object that holds API data pull everytime
// one is requested
// ... store the object within an array


// an instance of a weather info object would need to get deleted
// once the user searches a new location
import { weatherRequest } from "./requestApi";


const currentWeatherObject = {
    currentWeather: '',

    currentTemp: '',

    airQuality: '',

    time: ''
}

const currentForecastObject = {

}



// eslint-disable-next-line import/prefer-default-export
export const processApiController = function (weatherData) {

    console.log(weatherData);

    //
   


    function gatherCurrentWeather() {
        console.log(weatherData.current.condition.text);

        console.log(weatherData.current.temp_f)
    }
    gatherCurrentWeather();


    // create a function that processes each forecast's hour's information
    // create a function factory to reduce code

    // NEW IDEA: maybe assign a variable to the ARRAY of all the forecasted hours
    // in the weatherData ... and then do a forEach loop on them to
    // generate their individual boxes/information
    function gatherHourForecast() {
        console.log(weatherData);
        const forecastDay = weatherData.forecast.forecastday[0].hour;
        // forecastDays.pop();
        console.log(forecastDay);

        // trigger a run of the createForecastBox funciton here?
        forecastDay.forEach(hour => {
            console.log(hour.time);
        });
        
    }
    gatherHourForecast();


    function getTomorrowWeather() {

    }

    function getTwoDaysWeather() {

    }
}