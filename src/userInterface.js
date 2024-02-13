import { processApiController } from "./processApi";

import sun from "./icons/sun.png";
import clouds from "./icons/clouds.png";
import scattered from "./icons/scattered.png";
import snow from "./icons/snow.png";
import partlyCloudy from "./icons/partly-cloudy.png";
import storm from "./icons/storm.png";
import mist from "./icons/mist.png";
import drizzle from "./icons/drizzle.png";
import fog from "./icons/fog.png";
import rain from "./icons/rain.png"

import cloudPic from "./imgs/overcast.jpg";
import sunPic from "./imgs/sunny.jpg";
import drizzlePic from "./imgs/drizzle.jpg";
import partCloudPic from "./imgs/partly-cloudy.jpg";
import stormPic from "./imgs/storm.jpg";
import rainPic from "./imgs/heavy-rain.jpg";
import snowPic from "./imgs/snow.jpg";
import fogPic from "./imgs/fog.jpg";


const weatherCardContainer = document.querySelector('.weather-card-container');

const topHalf = document.querySelector('top-half');
const currentWeatherCard = document.querySelector('.current-weather-card');
const currentInformation = document.querySelector('.current-information');
const currentLocation = document.querySelector('.current-location');
const currentCondition = document.querySelector('.current-condition');
const daysForecastContainer = document.querySelector('.days-forecast-container');
const tomorrowContainer = document.querySelector('.tomorrow-container');
const tomorrow2Container = document.querySelector('.tomorrow2-container');

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

        } else if (weatherString.includes('rain') || weatherString.includes('moderate rain')) {
            activeIcon.src = rain

        } else if (weatherString.includes('thunder') || weatherString.includes('lightning')) {
            activeIcon.src = storm

        } else if (weatherString.includes('mist')) {
            activeIcon.src = mist

        } else if (weatherString.includes('drizzle')) {
            activeIcon.src = drizzle

        }  else if (weatherString.includes('fog')) {
            activeIcon.src = fog

        }
    

        return activeIcon

    };


    function changeWeatherBackground(conditionString) {
        const condition = conditionString.toLowerCase();

        if (condition.includes('sunny') || condition.includes('clear')) {
            currentWeatherCard.style.backgroundImage = `url(${sunPic})`;

        } else if (condition.includes('patchy') || condition.includes('partly cloudy')) {
            currentWeatherCard.style.backgroundImage = `url(${partCloudPic})`;

        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            currentWeatherCard.style.backgroundImage = `url(${cloudPic})`;
            // currentWeatherCard.style.backgroundImage = `url(${stormPic})`;

        } else if (condition.includes('drizzle') || condition.includes('light rain')) {
            currentWeatherCard.style.backgroundImage = `url(${drizzlePic})`;

        } else if (condition.includes('storm') || condition.includes('lightning')) {
            currentWeatherCard.style.backgroundImage = `url(${stormPic})`;

        } else if (condition.includes('rain')) {
            currentWeatherCard.style.backgroundImage = `url(${rainPic})`;

        } else if (condition.includes('snow')) {
            currentWeatherCard.style.backgroundImage = `url(${snowPic})`;

        } else if (condition.includes('mist') || condition.includes('fog')) {
            currentWeatherCard.style.backgroundImage = `url(${fogPic})`;
        }

    }


    function createTempBox(tempHigh, tempLow, fatherContainer) {
        // add arrow icon into this function

        const highLowBox = document.createElement('div')
        highLowBox.classList.add('high-low-box');
        fatherContainer.appendChild(highLowBox);

        const lowTempHeader = document.createElement('h3');
        lowTempHeader.textContent = `${tempLow}°`;
        highLowBox.appendChild(lowTempHeader);

        const highTempHeader = document.createElement('h3');
        highTempHeader.textContent = `${tempHigh}°`;
        highLowBox.appendChild(highTempHeader);
    }



    function createTomorrowBox(date, condition, tempHigh, tempLow) {
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = date;
        tomorrowContainer.appendChild(dateHeader);

        const activeIcon = getCorrectIcon(condition);
        activeIcon.classList.add('day-forecast-icon');
        tomorrowContainer.appendChild(activeIcon);
        
        // create tempBox function that is triggered here
        createTempBox(tempHigh, tempLow, tomorrowContainer);

    }

    function createTomorrow2Box (date, condition, tempHigh, tempLow) {
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = date;
        tomorrow2Container.appendChild(dateHeader);

        const activeIcon = getCorrectIcon(condition);
        activeIcon.classList.add('day-forecast-icon');
        tomorrow2Container.appendChild(activeIcon);
        
        // create tempBox function that is triggered here
        createTempBox(tempHigh, tempLow, tomorrow2Container);
    }



    function createHourBox(timeString, weatherConditionString, temperatureString) {

        const forecastHourBox = document.createElement('div');
        forecastHourBox.classList.add('forecast-hour-box');
        forecastContainer.appendChild(forecastHourBox);

        const forecastTime = document.createElement('h3');
        forecastTime.textContent = timeString;
        forecastHourBox.appendChild(forecastTime);

        // placeholder for pulling icons
        // maybe make a separate function for determing wich icon will get used
        // based on what the weather text says and call it here
        const activeIcon = getCorrectIcon(weatherConditionString);
        activeIcon.classList.add('forecast-icon');
        forecastHourBox.appendChild(activeIcon)


        const forecastTemp = document.createElement('h3');
        forecastTemp.textContent = `${temperatureString} F°`;
        forecastHourBox.appendChild(forecastTemp);
        
    };


    function deleteForecastBoxes () {
        const forecastHourBoxes = document.querySelectorAll('.forecast-hour-box');
        console.log(forecastHourBoxes);

        forecastHourBoxes.forEach(box => {
            forecastContainer.removeChild(box);
        });
    };

    function deleteTomorrowBoxes() {
        while (tomorrowContainer.firstChild) {
            tomorrowContainer.removeChild(tomorrowContainer.lastChild);
        }

        while (tomorrow2Container.firstChild) {
            tomorrow2Container.removeChild(tomorrow2Container.lastChild);
        }        
    }



    function changeCurrentInformation (condition, temperature, location, region, weatherData) {
        console.log(weatherData)
        currentLocation.textContent = `${location}, ${region}`;
        currentCondition.innerHTML = `${condition}, &nbsp;&nbsp;${temperature}F°`

        // perhaps trigger a the function here that changes the background image
        // of the weather-card based onw hat th econdition is
        changeWeatherBackground(condition);

    };

    


    return { createHourBox,
        createTomorrowBox,
        createTomorrow2Box, 
        getCorrectIcon, 
        deleteForecastBoxes,
        deleteTomorrowBoxes, 
        changeCurrentInformation,
        changeWeatherBackground 
    }
}


