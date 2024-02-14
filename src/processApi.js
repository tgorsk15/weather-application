
import { format, parse } from "date-fns"

import { controllerDOM } from "./userInterface";



// eslint-disable-next-line import/prefer-default-export
export const processApiController = function (weatherData) {

    console.log(weatherData);

    const DOMRun = controllerDOM();
   

    function toStandardTime(string) {
        const newTimeString = format(parse(string, 'HH:mm', new Date), 'h:mm aa');
        return newTimeString

    }

    function gatherCurrentWeather() {
        const weatherCondition = weatherData.current.condition.text;
        const currentTemperature = weatherData.current.temp_f;
        const currentLocation = weatherData.location.name;
        const currentRegion = weatherData.location.region;

        const currentDate = new Date()
        const timeFormatted = format(currentDate, 'hh:mm aa')
        // console.log(timeFormatted);

        const dateFormatted = format(currentDate, 'eeee eo, yyyy')
        // console.log(dateFormatted);

        DOMRun.changeCurrentInformation(weatherCondition, currentTemperature, 
            currentLocation, currentRegion, timeFormatted, dateFormatted, weatherData)
    }

    

    function gatherHourForecast() {
        console.log(weatherData);
        const forecastDay = weatherData.forecast.forecastday[0].hour;
        console.log(forecastDay);

        // trigger a run of the createForecastBox funciton here:
        forecastDay.forEach(hour => {

            const timeString = hour.time.slice(-5)
            // convert to standard time:
            const standardTimeString = toStandardTime(timeString);
            const weatherConditionString = hour.condition.text;
            const temperatureString = hour.temp_f

            DOMRun.createHourBox(standardTimeString, weatherConditionString, temperatureString);
        });
        
    }


    function getTomorrowWeather() {
        const tomorrowWeather = weatherData.forecast.forecastday[1]
        console.log(tomorrowWeather);

        const tomorrowDate = tomorrowWeather.date;
        const dateFormatted = format(tomorrowDate, 'eeee eo, yyyy');
        console.log(dateFormatted);

        const tomorrowCondition = tomorrowWeather.day.condition.text;
        console.log(tomorrowCondition);

        const tomorrowHigh = tomorrowWeather.day.maxtemp_f;
        console.log(tomorrowHigh);

        const tomorrowLow = tomorrowWeather.day.mintemp_f;
        console.log(tomorrowLow);

        DOMRun.createTomorrowBox(dateFormatted, tomorrowCondition, tomorrowHigh, tomorrowLow);
        
    }

    function getTwoDaysWeather() {
        const tomorrowWeather2 = weatherData.forecast.forecastday[2]
        console.log(tomorrowWeather2);

        const tomorrowDate2 = tomorrowWeather2.date;
        const dateFormatted = format(tomorrowDate2, 'eeee eo, yyyy');
        console.log(dateFormatted);

        const tomorrowCondition2 = tomorrowWeather2.day.condition.text;
        console.log(tomorrowCondition2);

        const tomorrowHigh2 = tomorrowWeather2.day.maxtemp_f;
        console.log(tomorrowHigh2);

        const tomorrowLow2 = tomorrowWeather2.day.mintemp_f;
        console.log(tomorrowLow2);

        DOMRun.createTomorrow2Box(dateFormatted, tomorrowCondition2, tomorrowHigh2, tomorrowLow2)

    };

    return {gatherCurrentWeather, 
        gatherHourForecast, 
        getTomorrowWeather, 
        getTwoDaysWeather,
        toStandardTime
    }
}