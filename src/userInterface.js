import { processApiController } from "./processApi";


const weatherCardContainer = document.querySelector('.weather-card-container');
const topHalf = document.querySelector('top-half');
const bottomHalf = document.querySelector('bottom-half');


// eslint-disable-next-line import/prefer-default-export
export const controllerDOM = function () {

    function createHourBox(timeString, weatherConditionString) {
        console.log(timeString);
        console.log(weatherConditionString);

    }




    return { createHourBox }
}


