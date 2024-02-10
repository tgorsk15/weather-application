import { processApiController } from "./processApi";

import sun from "./icons/sun.png";
import clouds from "./icons/clouds.png";
import Rain from "./icons/rain.png";
import scattered from "./icons/scattered.png";
import snow from "./icons/snow.png";
import partlyCloudy from "./icons/partly-cloudy.png";
import storm from "./icons/storm.png";


const weatherCardContainer = document.querySelector('.weather-card-container');
const topHalf = document.querySelector('top-half');
const bottomHalf = document.querySelector('bottom-half');
const forecastContainer = document.querySelector('.forecast-container');


// eslint-disable-next-line import/prefer-default-export
export const controllerDOM = function () {

    function getCorrectIcon(weatherConditionString) {
        console.log(weatherConditionString);
        const weatherString = weatherConditionString.toLowerCase()
        console.log(weatherString);
        console.log(typeof(weatherString));
        
        const activeIcon = new Image();

        if (weatherString === 'sunny' || weatherString.includes('clear')) {
            activeIcon.src = sun

        } else if (weatherString.includes('partly cloudy')) {
            activeIcon.src = partlyCloudy;

        } else if (weatherString.includes('cloudy') || weatherString.includes('overcast')) {
            activeIcon.src = clouds
            
        } else if (weatherString.includes('patchy')) {
            activeIcon.src = scattered

        } else if (weatherString.includes('snow')) {
            activeIcon.src = snow

        } else if (weatherString.includes('storm')) {
            activeIcon.src = storm
        }

    

        return activeIcon

    };



    function createHourBox(timeString, weatherConditionString, temperatureString) {
        console.log(timeString);
        console.log(weatherConditionString);
        console.log(temperatureString);

        const forecastBox = document.createElement('div');
        forecastBox.classList.add('forecast-box');
        forecastContainer.appendChild(forecastBox);

        const forecastTime = document.createElement('h3');
        forecastTime.textContent = timeString;
        forecastBox.appendChild(forecastTime);

        // placeholder for pulling icons
        // maybe make a separate function for determing wich icon will get used
        // based on what the weather text says and call it here
        const activeIcon = getCorrectIcon(weatherConditionString);
        activeIcon.classList.add('forecast-icon');
        forecastBox.appendChild(activeIcon)


        const forecastTemp = document.createElement('h3');
        forecastTemp.textContent = `${temperatureString} F°`;
        forecastBox.appendChild(forecastTemp);


    };



    




    return { createHourBox, getCorrectIcon }
}


