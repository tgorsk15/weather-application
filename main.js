/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    height: 100%;
    /* display: flex; */
    /* align-items: center; */
}

body {
    min-height: 100%;
    background-color: burlywood;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}

.weather-card-container {
    background-color: white;
    min-height: 83vh;
    max-width: 180vh;
    display: grid;
    grid-template-rows: 2fr 1.2fr;
    
}

.top-half {

}

.bottom-half {
    width: 100%;
    overflow: hidden;
}

.forecast-container {
    display: flex;
    min-width: 100%;
    background-color: rgb(223, 247, 247);
    height: 170px;
    overflow-x: auto;
    margin:  0px 15px;

}

.forecast-box {
    min-height: 80px;
    min-width: 100px;
    background-color: lightsalmon;
    margin: 10px;
}

.forecast-icon {
    height: 50px;
    width: 50px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;;AAEA;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,gBAAgB;IAChB,iBAAiB;;AAErB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["html {\n    height: 100%;\n    /* display: flex; */\n    /* align-items: center; */\n}\n\nbody {\n    min-height: 100%;\n    background-color: burlywood;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n}\n\n.weather-card-container {\n    background-color: white;\n    min-height: 83vh;\n    max-width: 180vh;\n    display: grid;\n    grid-template-rows: 2fr 1.2fr;\n    \n}\n\n.top-half {\n\n}\n\n.bottom-half {\n    width: 100%;\n    overflow: hidden;\n}\n\n.forecast-container {\n    display: flex;\n    min-width: 100%;\n    background-color: rgb(223, 247, 247);\n    height: 170px;\n    overflow-x: auto;\n    margin:  0px 15px;\n\n}\n\n.forecast-box {\n    min-height: 80px;\n    min-width: 100px;\n    background-color: lightsalmon;\n    margin: 10px;\n}\n\n.forecast-icon {\n    height: 50px;\n    width: 50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "../../node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/processApi.js":
/*!***************************!*\
  !*** ./src/processApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processApiController: () => (/* binding */ processApiController)
/* harmony export */ });
/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestApi */ "./src/requestApi.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
// create object that holds API data pull everytime
// one is requested
// ... store the object within an array


// an instance of a weather info object would need to get deleted
// once the user searches a new location




const currentWeatherObject = {
    currentWeather: '',

    currentTemp: '',

    airQuality: '',

    time: ''
}

const currentForecastObject = {

}



// eslint-disable-next-line import/prefer-default-export
const processApiController = function (weatherData) {

    console.log(weatherData);

    const DOMRun = (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.controllerDOM)();
   


    function gatherCurrentWeather() {
        const weatherCondition = weatherData.current.condition.text;
        const currentTemperature = weatherData.current.temp_f;
        const currentLocation = weatherData.location.name;
        console.log(currentLocation);

        DOMRun.changeCurrentInformation(weatherCondition, currentTemperature, currentLocation)
    }


    // create a function that processes each forecast's hour's information
    // create a function factory to reduce code

    function gatherHourForecast() {
        console.log(weatherData);
        const forecastDay = weatherData.forecast.forecastday[0].hour;
        console.log(forecastDay);

        // trigger a run of the createForecastBox funciton here?
        forecastDay.forEach(hour => {
            const timeString = hour.time.slice(-5)

            const weatherConditionString = hour.condition.text;

            const temperatureString = hour.temp_f

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

/***/ }),

/***/ "./src/requestApi.js":
/*!***************************!*\
  !*** ./src/requestApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherRequest: () => (/* binding */ weatherRequest)
/* harmony export */ });
/* harmony import */ var _processApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processApi */ "./src/processApi.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
// create api request here



const apiTemplate = {
    base: 'http://api.weatherapi.com/v1/forecast.json?key=291fefa5461a427285a150428240302&q=',

    userLocation: 'chicago',

    secondBase: '&days=3&aqi=no&alerts=no'
}

// possibly will help change over data each time a new location is searched:
let activeUrl = ''
let activeWeatherData = ''


// eslint-disable-next-line import/prefer-default-export
const weatherRequest = async function () {
    const earlyDOMRun = (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__.controllerDOM)();

    try {
        activeUrl = `${apiTemplate.base}${apiTemplate.userLocation}${apiTemplate.secondBase}`
        console.log(activeUrl)

        const response = await fetch(`${apiTemplate.base}${apiTemplate.userLocation}${apiTemplate.secondBase}`,
        {mode: 'cors'})

        if (apiTemplate.userLocation === '') {
            console.log('alert touched')
            alert('Please type a location into the search bar')
            return
        }

        if (!response.ok) {
            alert('Please enter a valid location!')
            throw new Error('Request failed');
        }


        console.log(response)

        const weatherData = await response.json();
        activeWeatherData = weatherData;
        console.log(activeWeatherData);

        earlyDOMRun.deleteForecastBoxes();

        const processRun = (0,_processApi__WEBPACK_IMPORTED_MODULE_0__.processApiController)(activeWeatherData);
        processRun.gatherCurrentWeather();
        processRun.gatherHourForecast();
        processRun.getTomorrowWeather();
        processRun.getTwoDaysWeather();

    } catch (error) {
        console.log(error)
    }
    

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

    // also have to change the value of 'userLocation' here, so that 
    // the new API request uses what the user typed in
    
    e.preventDefault();

    // const DOMRun2 = controllerDOM();
    // DOMRun2.deleteForecastBoxes();

    console.log(searchBar.value);
    apiTemplate.userLocation = searchBar.value;
    
    console.log('weather searched');
    deleteRequest();
    weatherRequest();
})




/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controllerDOM: () => (/* binding */ controllerDOM)
/* harmony export */ });
/* harmony import */ var _processApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processApi */ "./src/processApi.js");
/* harmony import */ var _icons_sun_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/sun.png */ "./src/icons/sun.png");
/* harmony import */ var _icons_clouds_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/clouds.png */ "./src/icons/clouds.png");
/* harmony import */ var _icons_rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/rain.png */ "./src/icons/rain.png");
/* harmony import */ var _icons_scattered_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/scattered.png */ "./src/icons/scattered.png");
/* harmony import */ var _icons_snow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/snow.png */ "./src/icons/snow.png");
/* harmony import */ var _icons_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/partly-cloudy.png */ "./src/icons/partly-cloudy.png");
/* harmony import */ var _icons_storm_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/storm.png */ "./src/icons/storm.png");
/* harmony import */ var _icons_mist_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/mist.png */ "./src/icons/mist.png");
/* harmony import */ var _icons_drizzle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/drizzle.png */ "./src/icons/drizzle.png");
/* harmony import */ var _icons_fog_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/fog.png */ "./src/icons/fog.png");














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
const controllerDOM = function () {

    function getCorrectIcon(weatherConditionString) {
        const weatherString = weatherConditionString.toLowerCase()
        console.log(weatherString);
        
        const activeIcon = new Image();

        if (weatherString === 'sunny' || weatherString.includes('clear')) {
            activeIcon.src = _icons_sun_png__WEBPACK_IMPORTED_MODULE_1__

        } else if (weatherString.includes('partly cloudy')) {
            activeIcon.src = _icons_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_6__;

        } else if (weatherString.includes('light rain')) {
            activeIcon.src = _icons_drizzle_png__WEBPACK_IMPORTED_MODULE_9__

        } else if (weatherString.includes('cloudy') || weatherString.includes('overcast')) {
            activeIcon.src = _icons_clouds_png__WEBPACK_IMPORTED_MODULE_2__
            
        } else if (weatherString.includes('patchy')) {
            activeIcon.src = _icons_scattered_png__WEBPACK_IMPORTED_MODULE_4__

        } else if (weatherString.includes('snow')) {
            activeIcon.src = _icons_snow_png__WEBPACK_IMPORTED_MODULE_5__

        } else if (weatherString.includes('storm')) {
            activeIcon.src = _icons_storm_png__WEBPACK_IMPORTED_MODULE_7__

        } else if (weatherString.includes('mist')) {
            activeIcon.src = _icons_mist_png__WEBPACK_IMPORTED_MODULE_8__

        } else if (weatherString.includes('drizzle')) {
            activeIcon.src = _icons_drizzle_png__WEBPACK_IMPORTED_MODULE_9__

        } else if (weatherString.includes('rain')) {
            activeIcon.src = _icons_rain_png__WEBPACK_IMPORTED_MODULE_3__

        } else if (weatherString.includes('fog')) {
            activeIcon.src = _icons_fog_png__WEBPACK_IMPORTED_MODULE_10__

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

    };

    




    return { createHourBox, getCorrectIcon, deleteForecastBoxes, changeCurrentInformation }
}




/***/ }),

/***/ "./src/icons/clouds.png":
/*!******************************!*\
  !*** ./src/icons/clouds.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d19567719b8fc616a917.png";

/***/ }),

/***/ "./src/icons/drizzle.png":
/*!*******************************!*\
  !*** ./src/icons/drizzle.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa148a80d50ab6879705.png";

/***/ }),

/***/ "./src/icons/fog.png":
/*!***************************!*\
  !*** ./src/icons/fog.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e00e75e49284e666d5c7.png";

/***/ }),

/***/ "./src/icons/mist.png":
/*!****************************!*\
  !*** ./src/icons/mist.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc211906d5c87677f4ce.png";

/***/ }),

/***/ "./src/icons/partly-cloudy.png":
/*!*************************************!*\
  !*** ./src/icons/partly-cloudy.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98dde459401e500a118a.png";

/***/ }),

/***/ "./src/icons/rain.png":
/*!****************************!*\
  !*** ./src/icons/rain.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1ba7cf61b2ee8a52eea.png";

/***/ }),

/***/ "./src/icons/scattered.png":
/*!*********************************!*\
  !*** ./src/icons/scattered.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4258d46805b6a61024f0.png";

/***/ }),

/***/ "./src/icons/snow.png":
/*!****************************!*\
  !*** ./src/icons/snow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9957456da0445490c376.png";

/***/ }),

/***/ "./src/icons/storm.png":
/*!*****************************!*\
  !*** ./src/icons/storm.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1ba7cf61b2ee8a52eea.png";

/***/ }),

/***/ "./src/icons/sun.png":
/*!***************************!*\
  !*** ./src/icons/sun.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d48da504f4816188c8d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestApi */ "./src/requestApi.js");





(0,_requestApi__WEBPACK_IMPORTED_MODULE_1__.weatherRequest)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7Ozs7QUFJOUMsMkRBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3M/ZjhhNiIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvcHJvY2Vzc0FwaS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3JlcXVlc3RBcGkuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG59XG5cbmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbn1cblxuLndlYXRoZXItY2FyZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDgzdmg7XG4gICAgbWF4LXdpZHRoOiAxODB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEuMmZyO1xuICAgIFxufVxuXG4udG9wLWhhbGYge1xuXG59XG5cbi5ib3R0b20taGFsZiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQ3LCAyNDcpO1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXJnaW46ICAwcHggMTVweDtcblxufVxuXG4uZm9yZWNhc3QtYm94IHtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZm9yZWNhc3QtaWNvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG4ud2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiA4M3ZoO1xcbiAgICBtYXgtd2lkdGg6IDE4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjJmcjtcXG4gICAgXFxufVxcblxcbi50b3AtaGFsZiB7XFxuXFxufVxcblxcbi5ib3R0b20taGFsZiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyNDcsIDI0Nyk7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIG1hcmdpbjogIDBweCAxNXB4O1xcblxcbn1cXG5cXG4uZm9yZWNhc3QtYm94IHtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWljb24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBjcmVhdGUgb2JqZWN0IHRoYXQgaG9sZHMgQVBJIGRhdGEgcHVsbCBldmVyeXRpbWVcbi8vIG9uZSBpcyByZXF1ZXN0ZWRcbi8vIC4uLiBzdG9yZSB0aGUgb2JqZWN0IHdpdGhpbiBhbiBhcnJheVxuXG5cbi8vIGFuIGluc3RhbmNlIG9mIGEgd2VhdGhlciBpbmZvIG9iamVjdCB3b3VsZCBuZWVkIHRvIGdldCBkZWxldGVkXG4vLyBvbmNlIHRoZSB1c2VyIHNlYXJjaGVzIGEgbmV3IGxvY2F0aW9uXG5pbXBvcnQgeyB3ZWF0aGVyUmVxdWVzdCB9IGZyb20gXCIuL3JlcXVlc3RBcGlcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXJET00gfSBmcm9tIFwiLi91c2VySW50ZXJmYWNlXCI7XG5cblxuY29uc3QgY3VycmVudFdlYXRoZXJPYmplY3QgPSB7XG4gICAgY3VycmVudFdlYXRoZXI6ICcnLFxuXG4gICAgY3VycmVudFRlbXA6ICcnLFxuXG4gICAgYWlyUXVhbGl0eTogJycsXG5cbiAgICB0aW1lOiAnJ1xufVxuXG5jb25zdCBjdXJyZW50Rm9yZWNhc3RPYmplY3QgPSB7XG5cbn1cblxuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgcHJvY2Vzc0FwaUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnN0IERPTVJ1biA9IGNvbnRyb2xsZXJET00oKTtcbiAgIFxuXG5cbiAgICBmdW5jdGlvbiBnYXRoZXJDdXJyZW50V2VhdGhlcigpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mO1xuICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50TG9jYXRpb24pO1xuXG4gICAgICAgIERPTVJ1bi5jaGFuZ2VDdXJyZW50SW5mb3JtYXRpb24od2VhdGhlckNvbmRpdGlvbiwgY3VycmVudFRlbXBlcmF0dXJlLCBjdXJyZW50TG9jYXRpb24pXG4gICAgfVxuXG5cbiAgICAvLyBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBlYWNoIGZvcmVjYXN0J3MgaG91cidzIGluZm9ybWF0aW9uXG4gICAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gZmFjdG9yeSB0byByZWR1Y2UgY29kZVxuXG4gICAgZnVuY3Rpb24gZ2F0aGVySG91ckZvcmVjYXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXkpO1xuXG4gICAgICAgIC8vIHRyaWdnZXIgYSBydW4gb2YgdGhlIGNyZWF0ZUZvcmVjYXN0Qm94IGZ1bmNpdG9uIGhlcmU/XG4gICAgICAgIGZvcmVjYXN0RGF5LmZvckVhY2goaG91ciA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gaG91ci50aW1lLnNsaWNlKC01KVxuXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nID0gaG91ci5jb25kaXRpb24udGV4dDtcblxuICAgICAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVTdHJpbmcgPSBob3VyLnRlbXBfZlxuXG4gICAgICAgICAgICBET01SdW4uY3JlYXRlSG91ckJveCh0aW1lU3RyaW5nLCB3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nLCB0ZW1wZXJhdHVyZVN0cmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGdldFRvbW9ycm93V2VhdGhlcigpIHtcbiAgICAgICAgY29uc3QgdG9tb3Jyb3dXZWF0aGVyID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV1cbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dXZWF0aGVyKTtcblxuICAgICAgICBjb25zdCB0b21vcnJvd0RhdGUgPSB0b21vcnJvd1dlYXRoZXIuZGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dEYXRlKVxuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uID0gdG9tb3Jyb3dXZWF0aGVyLmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93SGlnaCA9IHRvbW9ycm93V2VhdGhlci5kYXkubWF4dGVtcF9mO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0hpZ2gpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93TG93ID0gdG9tb3Jyb3dXZWF0aGVyLmRheS5taW50ZW1wX2Y7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93TG93KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHdvRGF5c1dlYXRoZXIoKSB7XG4gICAgICAgIGNvbnN0IHRvbW9ycm93V2VhdGhlcjIgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXVxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd1dlYXRoZXIyKTtcblxuICAgICAgICBjb25zdCB0b21vcnJvd0RhdGUyID0gdG9tb3Jyb3dXZWF0aGVyMi5kYXRlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0RhdGUyKVxuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93Q29uZGl0aW9uMiA9IHRvbW9ycm93V2VhdGhlcjIuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0NvbmRpdGlvbjIpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93SGlnaDIgPSB0b21vcnJvd1dlYXRoZXIyLmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93SGlnaDIpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93TG93MiA9IHRvbW9ycm93V2VhdGhlcjIuZGF5Lm1pbnRlbXBfZjtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dMb3cyKTtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2dhdGhlckN1cnJlbnRXZWF0aGVyLCBcbiAgICAgICAgZ2F0aGVySG91ckZvcmVjYXN0LCBcbiAgICAgICAgZ2V0VG9tb3Jyb3dXZWF0aGVyLCBcbiAgICAgICAgZ2V0VHdvRGF5c1dlYXRoZXJcbiAgICB9XG59IiwiLy8gY3JlYXRlIGFwaSByZXF1ZXN0IGhlcmVcbmltcG9ydCB7IHByb2Nlc3NBcGlDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvY2Vzc0FwaVwiO1xuaW1wb3J0IHsgY29udHJvbGxlckRPTSB9IGZyb20gXCIuL3VzZXJJbnRlcmZhY2VcIjtcblxuY29uc3QgYXBpVGVtcGxhdGUgPSB7XG4gICAgYmFzZTogJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MjkxZmVmYTU0NjFhNDI3Mjg1YTE1MDQyODI0MDMwMiZxPScsXG5cbiAgICB1c2VyTG9jYXRpb246ICdjaGljYWdvJyxcblxuICAgIHNlY29uZEJhc2U6ICcmZGF5cz0zJmFxaT1ubyZhbGVydHM9bm8nXG59XG5cbi8vIHBvc3NpYmx5IHdpbGwgaGVscCBjaGFuZ2Ugb3ZlciBkYXRhIGVhY2ggdGltZSBhIG5ldyBsb2NhdGlvbiBpcyBzZWFyY2hlZDpcbmxldCBhY3RpdmVVcmwgPSAnJ1xubGV0IGFjdGl2ZVdlYXRoZXJEYXRhID0gJydcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IHdlYXRoZXJSZXF1ZXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVhcmx5RE9NUnVuID0gY29udHJvbGxlckRPTSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYWN0aXZlVXJsID0gYCR7YXBpVGVtcGxhdGUuYmFzZX0ke2FwaVRlbXBsYXRlLnVzZXJMb2NhdGlvbn0ke2FwaVRlbXBsYXRlLnNlY29uZEJhc2V9YFxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVVcmwpXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlUZW1wbGF0ZS5iYXNlfSR7YXBpVGVtcGxhdGUudXNlckxvY2F0aW9ufSR7YXBpVGVtcGxhdGUuc2Vjb25kQmFzZX1gLFxuICAgICAgICB7bW9kZTogJ2NvcnMnfSlcblxuICAgICAgICBpZiAoYXBpVGVtcGxhdGUudXNlckxvY2F0aW9uID09PSAnJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsZXJ0IHRvdWNoZWQnKVxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSB0eXBlIGEgbG9jYXRpb24gaW50byB0aGUgc2VhcmNoIGJhcicpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbiEnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGZhaWxlZCcpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgYWN0aXZlV2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlV2VhdGhlckRhdGEpO1xuXG4gICAgICAgIGVhcmx5RE9NUnVuLmRlbGV0ZUZvcmVjYXN0Qm94ZXMoKTtcblxuICAgICAgICBjb25zdCBwcm9jZXNzUnVuID0gcHJvY2Vzc0FwaUNvbnRyb2xsZXIoYWN0aXZlV2VhdGhlckRhdGEpO1xuICAgICAgICBwcm9jZXNzUnVuLmdhdGhlckN1cnJlbnRXZWF0aGVyKCk7XG4gICAgICAgIHByb2Nlc3NSdW4uZ2F0aGVySG91ckZvcmVjYXN0KCk7XG4gICAgICAgIHByb2Nlc3NSdW4uZ2V0VG9tb3Jyb3dXZWF0aGVyKCk7XG4gICAgICAgIHByb2Nlc3NSdW4uZ2V0VHdvRGF5c1dlYXRoZXIoKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgICBcblxufVxuXG5cbmNvbnN0IGRlbGV0ZVJlcXVlc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhhY3RpdmVVcmwpO1xuXG4gICAgY29uc3QgZGVsZXRlUmVzID0gYXdhaXQgZmV0Y2goYCR7YWN0aXZlVXJsfWAsIFxuICAgIHsgbW9kZTogJ2NvcnMnLCBtZXRob2Q6ICdERUxFVEUnfSlcblxuICAgIGlmICghZGVsZXRlUmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGVsZXRlIFJlcXVlc3QgZmFpbGVkJyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlbGV0ZVJlcyk7XG4gICAgY29uc3QgZGVsZXRlRGF0YSA9IGF3YWl0IGRlbGV0ZVJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGVsZXRlRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZygnZGVsZXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICBhY3RpdmVXZWF0aGVyRGF0YSA9IGRlbGV0ZVJlcztcblxuXG4gICAgY29uc29sZS5sb2coYWN0aXZlV2VhdGhlckRhdGEpXG4gICAgXG59XG5cblxuXG4vLyBjcmVhdGUgdXNlckZvcm0gbG9naWMgaGVyZVxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAvLyBhbHNvIGhhdmUgdG8gY2hhbmdlIHRoZSB2YWx1ZSBvZiAndXNlckxvY2F0aW9uJyBoZXJlLCBzbyB0aGF0IFxuICAgIC8vIHRoZSBuZXcgQVBJIHJlcXVlc3QgdXNlcyB3aGF0IHRoZSB1c2VyIHR5cGVkIGluXG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gY29uc3QgRE9NUnVuMiA9IGNvbnRyb2xsZXJET00oKTtcbiAgICAvLyBET01SdW4yLmRlbGV0ZUZvcmVjYXN0Qm94ZXMoKTtcblxuICAgIGNvbnNvbGUubG9nKHNlYXJjaEJhci52YWx1ZSk7XG4gICAgYXBpVGVtcGxhdGUudXNlckxvY2F0aW9uID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCd3ZWF0aGVyIHNlYXJjaGVkJyk7XG4gICAgZGVsZXRlUmVxdWVzdCgpO1xuICAgIHdlYXRoZXJSZXF1ZXN0KCk7XG59KVxuXG5cbiIsImltcG9ydCB7IHByb2Nlc3NBcGlDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvY2Vzc0FwaVwiO1xuXG5pbXBvcnQgc3VuIGZyb20gXCIuL2ljb25zL3N1bi5wbmdcIjtcbmltcG9ydCBjbG91ZHMgZnJvbSBcIi4vaWNvbnMvY2xvdWRzLnBuZ1wiO1xuaW1wb3J0IHJhaW4gZnJvbSBcIi4vaWNvbnMvcmFpbi5wbmdcIjtcbmltcG9ydCBzY2F0dGVyZWQgZnJvbSBcIi4vaWNvbnMvc2NhdHRlcmVkLnBuZ1wiO1xuaW1wb3J0IHNub3cgZnJvbSBcIi4vaWNvbnMvc25vdy5wbmdcIjtcbmltcG9ydCBwYXJ0bHlDbG91ZHkgZnJvbSBcIi4vaWNvbnMvcGFydGx5LWNsb3VkeS5wbmdcIjtcbmltcG9ydCBzdG9ybSBmcm9tIFwiLi9pY29ucy9zdG9ybS5wbmdcIjtcbmltcG9ydCBtaXN0IGZyb20gXCIuL2ljb25zL21pc3QucG5nXCI7XG5pbXBvcnQgZHJpenpsZSBmcm9tIFwiLi9pY29ucy9kcml6emxlLnBuZ1wiO1xuaW1wb3J0IGZvZyBmcm9tIFwiLi9pY29ucy9mb2cucG5nXCI7XG5cblxuY29uc3Qgd2VhdGhlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jYXJkLWNvbnRhaW5lcicpO1xuXG5jb25zdCB0b3BIYWxmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndG9wLWhhbGYnKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItY2FyZCcpO1xuY29uc3QgY3VycmVudEluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaW5mb3JtYXRpb24nKTtcbmNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxvY2F0aW9uJyk7XG5jb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY29uZGl0aW9uJyk7XG5jb25zdCBkYXlzRm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cy1mb3JlY2FzdC1jb250YWluZXInKTtcblxuY29uc3QgYm90dG9tSGFsZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvdHRvbS1oYWxmJyk7XG5jb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1jb250YWluZXInKTtcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXJET00gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRDb3JyZWN0SWNvbih3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJTdHJpbmcgPSB3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nLnRvTG93ZXJDYXNlKClcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlclN0cmluZyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhY3RpdmVJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJTdHJpbmcgPT09ICdzdW5ueScgfHwgd2VhdGhlclN0cmluZy5pbmNsdWRlcygnY2xlYXInKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBzdW5cblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3BhcnRseSBjbG91ZHknKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBwYXJ0bHlDbG91ZHk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdsaWdodCByYWluJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gZHJpenpsZVxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnY2xvdWR5JykgfHwgd2VhdGhlclN0cmluZy5pbmNsdWRlcygnb3ZlcmNhc3QnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBjbG91ZHNcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3BhdGNoeScpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHNjYXR0ZXJlZFxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnc25vdycpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHNub3dcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3N0b3JtJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gc3Rvcm1cblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ21pc3QnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBtaXN0XG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdkcml6emxlJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gZHJpenpsZVxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygncmFpbicpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHJhaW5cblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ2ZvZycpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IGZvZ1xuXG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICByZXR1cm4gYWN0aXZlSWNvblxuXG4gICAgfTtcblxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIb3VyQm94KHRpbWVTdHJpbmcsIHdlYXRoZXJDb25kaXRpb25TdHJpbmcsIHRlbXBlcmF0dXJlU3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWVTdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcGVyYXR1cmVTdHJpbmcpO1xuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcmVjYXN0Qm94LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWJveCcpO1xuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJveCk7XG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3RUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZm9yZWNhc3RUaW1lLnRleHRDb250ZW50ID0gdGltZVN0cmluZztcbiAgICAgICAgZm9yZWNhc3RCb3guYXBwZW5kQ2hpbGQoZm9yZWNhc3RUaW1lKTtcblxuICAgICAgICAvLyBwbGFjZWhvbGRlciBmb3IgcHVsbGluZyBpY29uc1xuICAgICAgICAvLyBtYXliZSBtYWtlIGEgc2VwYXJhdGUgZnVuY3Rpb24gZm9yIGRldGVybWluZyB3aWNoIGljb24gd2lsbCBnZXQgdXNlZFxuICAgICAgICAvLyBiYXNlZCBvbiB3aGF0IHRoZSB3ZWF0aGVyIHRleHQgc2F5cyBhbmQgY2FsbCBpdCBoZXJlXG4gICAgICAgIGNvbnN0IGFjdGl2ZUljb24gPSBnZXRDb3JyZWN0SWNvbih3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nKTtcbiAgICAgICAgYWN0aXZlSWNvbi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1pY29uJyk7XG4gICAgICAgIGZvcmVjYXN0Qm94LmFwcGVuZENoaWxkKGFjdGl2ZUljb24pXG5cblxuICAgICAgICBjb25zdCBmb3JlY2FzdFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmb3JlY2FzdFRlbXAudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZVN0cmluZ30gRsKwYDtcbiAgICAgICAgZm9yZWNhc3RCb3guYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wKTtcbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRm9yZWNhc3RCb3hlcyAoKSB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Qm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtYm94Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0Qm94ZXMpO1xuXG4gICAgICAgIGZvcmVjYXN0Qm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgICAgICAgZm9yZWNhc3RDb250YWluZXIucmVtb3ZlQ2hpbGQoYm94KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEluZm9ybWF0aW9uIChjb25kaXRpb24sIHRlbXBlcmF0dXJlLCBsb2NhdGlvbikge1xuICAgICAgICBjdXJyZW50TG9jYXRpb24udGV4dENvbnRlbnQgPSBsb2NhdGlvbjtcbiAgICAgICAgY3VycmVudENvbmRpdGlvbi5pbm5lckhUTUwgPSBgJHtjb25kaXRpb259LCAmbmJzcDsmbmJzcDske3RlbXBlcmF0dXJlfUbCsGBcblxuICAgIH07XG5cbiAgICBcblxuXG5cblxuICAgIHJldHVybiB7IGNyZWF0ZUhvdXJCb3gsIGdldENvcnJlY3RJY29uLCBkZWxldGVGb3JlY2FzdEJveGVzLCBjaGFuZ2VDdXJyZW50SW5mb3JtYXRpb24gfVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyB3ZWF0aGVyUmVxdWVzdCB9IGZyb20gJy4vcmVxdWVzdEFwaSc7XG5cblxuXG53ZWF0aGVyUmVxdWVzdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==