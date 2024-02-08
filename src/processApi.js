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

}