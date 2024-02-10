// create object that holds API data pull everytime
// one is requested
// ... store the object within an array


// an instance of a weather info object would need to get deleted
// once the user searches a new location
import { weatherRequest } from "./requestApi";
import { controllerDOM } from "./userInterface";


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

    const DOMRun = controllerDOM();
   


    function gatherCurrentWeather() {
        console.log(weatherData.current.condition.text);

        console.log(weatherData.current.temp_f)
    }


    // create a function that processes each forecast's hour's information
    // create a function factory to reduce code

    function gatherHourForecast() {
        console.log(weatherData);
        const forecastDay = weatherData.forecast.forecastday[0].hour;
        console.log(forecastDay);

        // trigger a run of the createForecastBox funciton here?
        forecastDay.forEach(hour => {
            console.log(hour.time);
            const timeString = hour.time.slice(-5)
            // console.log(timeString);

            const weatherConditionString = hour.condition.text;
            // console.log(weatherConditionString);

            const temperatureString = hour.temp_f
            console.log(temperatureString);

            DOMRun.createHourBox(timeString, weatherConditionString, temperatureString);
        });
        
    }


    function getTomorrowWeather() {
        const tomorrowWeather = weatherData.forecast.forecastday[1]
        console.log(tomorrowWeather);

        const tomorrowDate = tomorrowWeather.date;
        console.log(tomorrowDate)

        const tomorrowCondition = tomorrowWeather.day.condition.text;
        console.log(tomorrowCondition);

        const tomorrowHigh = tomorrowWeather.day.maxtemp_f;
        console.log(tomorrowHigh);

        const tomorrowLow = tomorrowWeather.day.mintemp_f;
        console.log(tomorrowLow);
        
    }

    function getTwoDaysWeather() {
        const tomorrowWeather2 = weatherData.forecast.forecastday[2]
        console.log(tomorrowWeather2);

        const tomorrowDate2 = tomorrowWeather2.date;
        console.log(tomorrowDate2)

        const tomorrowCondition2 = tomorrowWeather2.day.condition.text;
        console.log(tomorrowCondition2);

        const tomorrowHigh2 = tomorrowWeather2.day.maxtemp_f;
        console.log(tomorrowHigh2);

        const tomorrowLow2 = tomorrowWeather2.day.mintemp_f;
        console.log(tomorrowLow2);

    };

    return {gatherCurrentWeather, 
        gatherHourForecast, 
        getTomorrowWeather, 
        getTwoDaysWeather
    }
}