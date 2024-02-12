import { processApiController } from "./processApi";

import sun from "./icons/sun.png";
import clouds from "./icons/clouds.png";
import rain from "./icons/rain.png";
import scattered from "./icons/scattered.png";
import snow from "./icons/snow.png";
import partlyCloudy from "./icons/partly-cloudy.png";
import storm from "./icons/storm.png";
import mist from "./icons/mist.png";
import drizzle from "./icons/drizzle.png";
import fog from "./icons/fog.png";

import cloudPic from "./imgs/overcast.jpg";
import sunPic from "./imgs/sunny.jpg";


const weatherCardContainer = document.querySelector('.weather-card-container');

const topHalf = document.querySelector('top-half');
const currentWeatherCard = document.querySelector('.current-weather-card');
const currentInformation = document.querySelector('.current-information');
const currentLocation = document.querySelector('.current-location');
const currentCondition = document.querySelector('.current-condition');
const daysForecastContainer = document.querySelector('.days-forecast-container');

const bottomHalf = document.querySelector('bottom-half');
const forecastContainer = document.querySelector('.forecast-container');


// eslint-disable-next-line import/prefer-default-export
export const controllerDOM = function () {

    function getCorrectIcon(weatherConditionString) {
        const weatherString = weatherConditionString.toLowerCase()
        console.log(weatherString);
        
        const activeIcon = new Image();

        if (weatherString === 'sunny' || weatherString.includes('clear')) {
            activeIcon.src = sun

        } else if (weatherString.includes('partly cloudy')) {
            activeIcon.src = partlyCloudy;

        } else if (weatherString.includes('light rain')) {
            activeIcon.src = drizzle

        } else if (weatherString.includes('cloudy') || weatherString.includes('overcast')) {
            activeIcon.src = clouds
            
        } else if (weatherString.includes('patchy')) {
            activeIcon.src = scattered

        } else if (weatherString.includes('snow')) {
            activeIcon.src = snow

        } else if (weatherString.includes('storm')) {
            activeIcon.src = storm

        } else if (weatherString.includes('mist')) {
            activeIcon.src = mist

        } else if (weatherString.includes('drizzle')) {
            activeIcon.src = drizzle

        } else if (weatherString.includes('rain')) {
            activeIcon.src = rain

        } else if (weatherString.includes('fog')) {
            activeIcon.src = fog

        }
    

        return activeIcon

    };


    function changeWeatherBackground(conditionString) {
        const condition = conditionString.toLowerCase();

        if (condition.includes('sunny') || condition.includes('clear')) {
            currentWeatherCard.style.backgroundImage = `url(${sunPic})`;

        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            currentWeatherCard.style.backgroundImage = `url(${cloudPic})`;
        }

    }



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


    function deleteForecastBoxes () {
        const forecastBoxes = document.querySelectorAll('.forecast-box');
        console.log(forecastBoxes);

        forecastBoxes.forEach(box => {
            forecastContainer.removeChild(box);
        });
    };


    function changeCurrentInformation (condition, temperature, location) {
        currentLocation.textContent = location;
        currentCondition.innerHTML = `${condition}, &nbsp;&nbsp;${temperature}F°`

        // perhaps trigger a the function here that changes the background image
        // of the weather-card based onw hat th econdition is
        changeWeatherBackground(condition);

    };

    




    return { createHourBox, 
        getCorrectIcon, 
        deleteForecastBoxes, 
        changeCurrentInformation,
        changeWeatherBackground 
    }
}


