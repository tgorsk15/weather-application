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
    display: grid;
    grid-template-columns: 3.5fr 1fr;
    padding: 0px 15px;
    padding-top: 15px;
}

.current-weather-card {
    grid-column: 1;
    transition: background-image 5s;
}

.current-information {
    margin-left: 40px;
    margin-top: 40px;
    /* color: white; */
}


.days-forecast-container {
    grid-column: 2;
}





.bottom-half {
    width: 100%;
    overflow: hidden;
}

.forecast-hour-header {
    margin: 10px 10px ;

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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;AAClB;;;;;;AAMA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,gBAAgB;IAChB,iBAAiB;;AAErB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["html {\n    height: 100%;\n    /* display: flex; */\n    /* align-items: center; */\n}\n\nbody {\n    min-height: 100%;\n    background-color: burlywood;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n}\n\n.weather-card-container {\n    background-color: white;\n    min-height: 83vh;\n    max-width: 180vh;\n    display: grid;\n    grid-template-rows: 2fr 1.2fr;\n    \n}\n\n.top-half {\n    display: grid;\n    grid-template-columns: 3.5fr 1fr;\n    padding: 0px 15px;\n    padding-top: 15px;\n}\n\n.current-weather-card {\n    grid-column: 1;\n    transition: background-image 5s;\n}\n\n.current-information {\n    margin-left: 40px;\n    margin-top: 40px;\n    /* color: white; */\n}\n\n\n.days-forecast-container {\n    grid-column: 2;\n}\n\n\n\n\n\n.bottom-half {\n    width: 100%;\n    overflow: hidden;\n}\n\n.forecast-hour-header {\n    margin: 10px 10px ;\n\n}\n\n.forecast-container {\n    display: flex;\n    min-width: 100%;\n    background-color: rgb(223, 247, 247);\n    height: 170px;\n    overflow-x: auto;\n    margin:  0px 15px;\n\n}\n\n.forecast-box {\n    min-height: 80px;\n    min-width: 100px;\n    background-color: lightsalmon;\n    margin: 10px;\n}\n\n.forecast-icon {\n    height: 50px;\n    width: 50px;\n}"],"sourceRoot":""}]);
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

        DOMRun.changeCurrentInformation(weatherCondition, currentTemperature, currentLocation, weatherData)
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
/* harmony import */ var _imgs_overcast_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgs/overcast.jpg */ "./src/imgs/overcast.jpg");
/* harmony import */ var _imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imgs/sunny.jpg */ "./src/imgs/sunny.jpg");
/* harmony import */ var _imgs_drizzle_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./imgs/drizzle.jpg */ "./src/imgs/drizzle.jpg");
/* harmony import */ var _imgs_partly_cloudy_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./imgs/partly-cloudy.jpg */ "./src/imgs/partly-cloudy.jpg");
/* harmony import */ var _imgs_storm_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./imgs/storm.jpg */ "./src/imgs/storm.jpg");
/* harmony import */ var _imgs_rain_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./imgs/rain.jpg */ "./src/imgs/rain.jpg");





















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


    function changeWeatherBackground(conditionString) {
        const condition = conditionString.toLowerCase();

        if (condition.includes('sunny') || condition.includes('clear')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_12__})`;

        } else if (condition.includes('patchy') || condition.includes('partly cloudy')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_partly_cloudy_jpg__WEBPACK_IMPORTED_MODULE_14__})`;

        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_overcast_jpg__WEBPACK_IMPORTED_MODULE_11__})`;

        } else if (condition.includes('drizzle') || condition.includes('light rain')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_drizzle_jpg__WEBPACK_IMPORTED_MODULE_13__})`;

        } else if (condition.includes('storm') || condition.includes('lightning')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_storm_jpg__WEBPACK_IMPORTED_MODULE_15__})`;

        } else if (condition.includes('rain')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_rain_jpg__WEBPACK_IMPORTED_MODULE_16__})`;
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


    function changeCurrentInformation (condition, temperature, location, weatherData) {
        console.log(weatherData)
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

/***/ }),

/***/ "./src/imgs/drizzle.jpg":
/*!******************************!*\
  !*** ./src/imgs/drizzle.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad3ca1eadea110467f39.jpg";

/***/ }),

/***/ "./src/imgs/overcast.jpg":
/*!*******************************!*\
  !*** ./src/imgs/overcast.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3db1947452c2288df334.jpg";

/***/ }),

/***/ "./src/imgs/partly-cloudy.jpg":
/*!************************************!*\
  !*** ./src/imgs/partly-cloudy.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93ccedc1e8e8ff910780.jpg";

/***/ }),

/***/ "./src/imgs/rain.jpg":
/*!***************************!*\
  !*** ./src/imgs/rain.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9343428e2da2a417c30e.jpg";

/***/ }),

/***/ "./src/imgs/storm.jpg":
/*!****************************!*\
  !*** ./src/imgs/storm.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfad4f79a9657d3662db.jpg";

/***/ }),

/***/ "./src/imgs/sunny.jpg":
/*!****************************!*\
  !*** ./src/imgs/sunny.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87f50f7b27db52a57eea.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzP2Y4YTYiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3Byb2Nlc3NBcGkuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9yZXF1ZXN0QXBpLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xufVxuXG5ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG59XG5cbi53ZWF0aGVyLWNhcmQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiA4M3ZoO1xuICAgIG1heC13aWR0aDogMTgwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjJmcjtcbiAgICBcbn1cblxuLnRvcC1oYWxmIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy41ZnIgMWZyO1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uY3VycmVudC13ZWF0aGVyLWNhcmQge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgNXM7XG59XG5cbi5jdXJyZW50LWluZm9ybWF0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuXG4uZGF5cy1mb3JlY2FzdC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xufVxuXG5cblxuXG5cbi5ib3R0b20taGFsZiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcmVjYXN0LWhvdXItaGVhZGVyIHtcbiAgICBtYXJnaW46IDEwcHggMTBweCA7XG5cbn1cblxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQ3LCAyNDcpO1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXJnaW46ICAwcHggMTVweDtcblxufVxuXG4uZm9yZWNhc3QtYm94IHtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZm9yZWNhc3QtaWNvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7Ozs7O0FBTUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuLndlYXRoZXItY2FyZC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogODN2aDtcXG4gICAgbWF4LXdpZHRoOiAxODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMS4yZnI7XFxuICAgIFxcbn1cXG5cXG4udG9wLWhhbGYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNWZyIDFmcjtcXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNhcmQge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSA1cztcXG59XFxuXFxuLmN1cnJlbnQtaW5mb3JtYXRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5cXG4uZGF5cy1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmJvdHRvbS1oYWxmIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5mb3JlY2FzdC1ob3VyLWhlYWRlciB7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDtcXG5cXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQ3LCAyNDcpO1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBtYXJnaW46ICAwcHggMTVweDtcXG5cXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY3JlYXRlIG9iamVjdCB0aGF0IGhvbGRzIEFQSSBkYXRhIHB1bGwgZXZlcnl0aW1lXG4vLyBvbmUgaXMgcmVxdWVzdGVkXG4vLyAuLi4gc3RvcmUgdGhlIG9iamVjdCB3aXRoaW4gYW4gYXJyYXlcblxuXG4vLyBhbiBpbnN0YW5jZSBvZiBhIHdlYXRoZXIgaW5mbyBvYmplY3Qgd291bGQgbmVlZCB0byBnZXQgZGVsZXRlZFxuLy8gb25jZSB0aGUgdXNlciBzZWFyY2hlcyBhIG5ldyBsb2NhdGlvblxuaW1wb3J0IHsgd2VhdGhlclJlcXVlc3QgfSBmcm9tIFwiLi9yZXF1ZXN0QXBpXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyRE9NIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuXG5cbmNvbnN0IGN1cnJlbnRXZWF0aGVyT2JqZWN0ID0ge1xuICAgIGN1cnJlbnRXZWF0aGVyOiAnJyxcblxuICAgIGN1cnJlbnRUZW1wOiAnJyxcblxuICAgIGFpclF1YWxpdHk6ICcnLFxuXG4gICAgdGltZTogJydcbn1cblxuY29uc3QgY3VycmVudEZvcmVjYXN0T2JqZWN0ID0ge1xuXG59XG5cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IHByb2Nlc3NBcGlDb250cm9sbGVyID0gZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBjb25zdCBET01SdW4gPSBjb250cm9sbGVyRE9NKCk7XG4gICBcblxuXG4gICAgZnVuY3Rpb24gZ2F0aGVyQ3VycmVudFdlYXRoZXIoKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudExvY2F0aW9uKTtcblxuICAgICAgICBET01SdW4uY2hhbmdlQ3VycmVudEluZm9ybWF0aW9uKHdlYXRoZXJDb25kaXRpb24sIGN1cnJlbnRUZW1wZXJhdHVyZSwgY3VycmVudExvY2F0aW9uLCB3ZWF0aGVyRGF0YSlcbiAgICB9XG5cblxuICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGVhY2ggZm9yZWNhc3QncyBob3VyJ3MgaW5mb3JtYXRpb25cbiAgICAvLyBjcmVhdGUgYSBmdW5jdGlvbiBmYWN0b3J5IHRvIHJlZHVjZSBjb2RlXG5cbiAgICBmdW5jdGlvbiBnYXRoZXJIb3VyRm9yZWNhc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXkgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERheSk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBhIHJ1biBvZiB0aGUgY3JlYXRlRm9yZWNhc3RCb3ggZnVuY2l0b24gaGVyZT9cbiAgICAgICAgZm9yZWNhc3REYXkuZm9yRWFjaChob3VyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBob3VyLnRpbWUuc2xpY2UoLTUpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25TdHJpbmcgPSBob3VyLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZVN0cmluZyA9IGhvdXIudGVtcF9mXG5cbiAgICAgICAgICAgIERPTVJ1bi5jcmVhdGVIb3VyQm94KHRpbWVTdHJpbmcsIHdlYXRoZXJDb25kaXRpb25TdHJpbmcsIHRlbXBlcmF0dXJlU3RyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZ2V0VG9tb3Jyb3dXZWF0aGVyKCkge1xuICAgICAgICBjb25zdCB0b21vcnJvd1dlYXRoZXIgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXVxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd1dlYXRoZXIpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93RGF0ZSA9IHRvbW9ycm93V2VhdGhlci5kYXRlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0RhdGUpXG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSB0b21vcnJvd1dlYXRoZXIuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dIaWdoID0gdG9tb3Jyb3dXZWF0aGVyLmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93SGlnaCk7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dMb3cgPSB0b21vcnJvd1dlYXRoZXIuZGF5Lm1pbnRlbXBfZjtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dMb3cpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUd29EYXlzV2VhdGhlcigpIHtcbiAgICAgICAgY29uc3QgdG9tb3Jyb3dXZWF0aGVyMiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdXG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93V2VhdGhlcjIpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93RGF0ZTIgPSB0b21vcnJvd1dlYXRoZXIyLmRhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93RGF0ZTIpXG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24yID0gdG9tb3Jyb3dXZWF0aGVyMi5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93Q29uZGl0aW9uMik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dIaWdoMiA9IHRvbW9ycm93V2VhdGhlcjIuZGF5Lm1heHRlbXBfZjtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dIaWdoMik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dMb3cyID0gdG9tb3Jyb3dXZWF0aGVyMi5kYXkubWludGVtcF9mO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0xvdzIpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7Z2F0aGVyQ3VycmVudFdlYXRoZXIsIFxuICAgICAgICBnYXRoZXJIb3VyRm9yZWNhc3QsIFxuICAgICAgICBnZXRUb21vcnJvd1dlYXRoZXIsIFxuICAgICAgICBnZXRUd29EYXlzV2VhdGhlclxuICAgIH1cbn0iLCIvLyBjcmVhdGUgYXBpIHJlcXVlc3QgaGVyZVxuaW1wb3J0IHsgcHJvY2Vzc0FwaUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9jZXNzQXBpXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyRE9NIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuXG5jb25zdCBhcGlUZW1wbGF0ZSA9IHtcbiAgICBiYXNlOiAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0yOTFmZWZhNTQ2MWE0MjcyODVhMTUwNDI4MjQwMzAyJnE9JyxcblxuICAgIHVzZXJMb2NhdGlvbjogJ2NoaWNhZ28nLFxuXG4gICAgc2Vjb25kQmFzZTogJyZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ubydcbn1cblxuLy8gcG9zc2libHkgd2lsbCBoZWxwIGNoYW5nZSBvdmVyIGRhdGEgZWFjaCB0aW1lIGEgbmV3IGxvY2F0aW9uIGlzIHNlYXJjaGVkOlxubGV0IGFjdGl2ZVVybCA9ICcnXG5sZXQgYWN0aXZlV2VhdGhlckRhdGEgPSAnJ1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3Qgd2VhdGhlclJlcXVlc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZWFybHlET01SdW4gPSBjb250cm9sbGVyRE9NKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBhY3RpdmVVcmwgPSBgJHthcGlUZW1wbGF0ZS5iYXNlfSR7YXBpVGVtcGxhdGUudXNlckxvY2F0aW9ufSR7YXBpVGVtcGxhdGUuc2Vjb25kQmFzZX1gXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVVybClcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVRlbXBsYXRlLmJhc2V9JHthcGlUZW1wbGF0ZS51c2VyTG9jYXRpb259JHthcGlUZW1wbGF0ZS5zZWNvbmRCYXNlfWAsXG4gICAgICAgIHttb2RlOiAnY29ycyd9KVxuXG4gICAgICAgIGlmIChhcGlUZW1wbGF0ZS51c2VyTG9jYXRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWxlcnQgdG91Y2hlZCcpXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHR5cGUgYSBsb2NhdGlvbiBpbnRvIHRoZSBzZWFyY2ggYmFyJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uIScpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZmFpbGVkJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBhY3RpdmVXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWF0aGVyRGF0YSk7XG5cbiAgICAgICAgZWFybHlET01SdW4uZGVsZXRlRm9yZWNhc3RCb3hlcygpO1xuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NSdW4gPSBwcm9jZXNzQXBpQ29udHJvbGxlcihhY3RpdmVXZWF0aGVyRGF0YSk7XG4gICAgICAgIHByb2Nlc3NSdW4uZ2F0aGVyQ3VycmVudFdlYXRoZXIoKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nYXRoZXJIb3VyRm9yZWNhc3QoKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nZXRUb21vcnJvd1dlYXRoZXIoKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nZXRUd29EYXlzV2VhdGhlcigpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICAgIFxuXG59XG5cblxuY29uc3QgZGVsZXRlUmVxdWVzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVVybCk7XG5cbiAgICBjb25zdCBkZWxldGVSZXMgPSBhd2FpdCBmZXRjaChgJHthY3RpdmVVcmx9YCwgXG4gICAgeyBtb2RlOiAnY29ycycsIG1ldGhvZDogJ0RFTEVURSd9KVxuXG4gICAgaWYgKCFkZWxldGVSZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWxldGUgUmVxdWVzdCBmYWlsZWQnKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGVsZXRlUmVzKTtcbiAgICBjb25zdCBkZWxldGVEYXRhID0gYXdhaXQgZGVsZXRlUmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkZWxldGVEYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKCdkZWxldGUgc3VjY2Vzc2Z1bCcpO1xuICAgIGFjdGl2ZVdlYXRoZXJEYXRhID0gZGVsZXRlUmVzO1xuXG5cbiAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWF0aGVyRGF0YSlcbiAgICBcbn1cblxuXG5cbi8vIGNyZWF0ZSB1c2VyRm9ybSBsb2dpYyBoZXJlXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idXR0b24nKTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIC8vIGFsc28gaGF2ZSB0byBjaGFuZ2UgdGhlIHZhbHVlIG9mICd1c2VyTG9jYXRpb24nIGhlcmUsIHNvIHRoYXQgXG4gICAgLy8gdGhlIG5ldyBBUEkgcmVxdWVzdCB1c2VzIHdoYXQgdGhlIHVzZXIgdHlwZWQgaW5cbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBjb25zdCBET01SdW4yID0gY29udHJvbGxlckRPTSgpO1xuICAgIC8vIERPTVJ1bjIuZGVsZXRlRm9yZWNhc3RCb3hlcygpO1xuXG4gICAgY29uc29sZS5sb2coc2VhcmNoQmFyLnZhbHVlKTtcbiAgICBhcGlUZW1wbGF0ZS51c2VyTG9jYXRpb24gPSBzZWFyY2hCYXIudmFsdWU7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ3dlYXRoZXIgc2VhcmNoZWQnKTtcbiAgICBkZWxldGVSZXF1ZXN0KCk7XG4gICAgd2VhdGhlclJlcXVlc3QoKTtcbn0pXG5cblxuIiwiaW1wb3J0IHsgcHJvY2Vzc0FwaUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9jZXNzQXBpXCI7XG5cbmltcG9ydCBzdW4gZnJvbSBcIi4vaWNvbnMvc3VuLnBuZ1wiO1xuaW1wb3J0IGNsb3VkcyBmcm9tIFwiLi9pY29ucy9jbG91ZHMucG5nXCI7XG5pbXBvcnQgcmFpbiBmcm9tIFwiLi9pY29ucy9yYWluLnBuZ1wiO1xuaW1wb3J0IHNjYXR0ZXJlZCBmcm9tIFwiLi9pY29ucy9zY2F0dGVyZWQucG5nXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi9pY29ucy9zbm93LnBuZ1wiO1xuaW1wb3J0IHBhcnRseUNsb3VkeSBmcm9tIFwiLi9pY29ucy9wYXJ0bHktY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IHN0b3JtIGZyb20gXCIuL2ljb25zL3N0b3JtLnBuZ1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4vaWNvbnMvbWlzdC5wbmdcIjtcbmltcG9ydCBkcml6emxlIGZyb20gXCIuL2ljb25zL2RyaXp6bGUucG5nXCI7XG5pbXBvcnQgZm9nIGZyb20gXCIuL2ljb25zL2ZvZy5wbmdcIjtcblxuaW1wb3J0IGNsb3VkUGljIGZyb20gXCIuL2ltZ3Mvb3ZlcmNhc3QuanBnXCI7XG5pbXBvcnQgc3VuUGljIGZyb20gXCIuL2ltZ3Mvc3VubnkuanBnXCI7XG5pbXBvcnQgZHJpenpsZVBpYyBmcm9tIFwiLi9pbWdzL2RyaXp6bGUuanBnXCI7XG5pbXBvcnQgcGFydENsb3VkUGljIGZyb20gXCIuL2ltZ3MvcGFydGx5LWNsb3VkeS5qcGdcIjtcbmltcG9ydCBzdG9ybVBpYyBmcm9tIFwiLi9pbWdzL3N0b3JtLmpwZ1wiO1xuaW1wb3J0IHJhaW5QaWMgZnJvbSBcIi4vaW1ncy9yYWluLmpwZ1wiO1xuXG5cbmNvbnN0IHdlYXRoZXJDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZC1jb250YWluZXInKTtcblxuY29uc3QgdG9wSGFsZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RvcC1oYWxmJyk7XG5jb25zdCBjdXJyZW50V2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyLWNhcmQnKTtcbmNvbnN0IGN1cnJlbnRJbmZvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWluZm9ybWF0aW9uJyk7XG5jb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1sb2NhdGlvbicpO1xuY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNvbmRpdGlvbicpO1xuY29uc3QgZGF5c0ZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtZm9yZWNhc3QtY29udGFpbmVyJyk7XG5cbmNvbnN0IGJvdHRvbUhhbGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib3R0b20taGFsZicpO1xuY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtY29udGFpbmVyJyk7XG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBjb250cm9sbGVyRE9NID0gZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gZ2V0Q29ycmVjdEljb24od2VhdGhlckNvbmRpdGlvblN0cmluZykge1xuICAgICAgICBjb25zdCB3ZWF0aGVyU3RyaW5nID0gd2VhdGhlckNvbmRpdGlvblN0cmluZy50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJTdHJpbmcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYWN0aXZlSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyU3RyaW5nID09PSAnc3VubnknIHx8IHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ2NsZWFyJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gc3VuXG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdwYXJ0bHkgY2xvdWR5JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gcGFydGx5Q2xvdWR5O1xuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnbGlnaHQgcmFpbicpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IGRyaXp6bGVcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ2Nsb3VkeScpIHx8IHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ292ZXJjYXN0JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gY2xvdWRzXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdwYXRjaHknKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBzY2F0dGVyZWRcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3Nub3cnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBzbm93XG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdzdG9ybScpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHN0b3JtXG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdtaXN0JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gbWlzdFxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnZHJpenpsZScpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IGRyaXp6bGVcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3JhaW4nKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSByYWluXG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdmb2cnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBmb2dcblxuICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZUljb25cblxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVdlYXRoZXJCYWNrZ3JvdW5kKGNvbmRpdGlvblN0cmluZykge1xuICAgICAgICBjb25zdCBjb25kaXRpb24gPSBjb25kaXRpb25TdHJpbmcudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdzdW5ueScpIHx8IGNvbmRpdGlvbi5pbmNsdWRlcygnY2xlYXInKSkge1xuICAgICAgICAgICAgY3VycmVudFdlYXRoZXJDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzdW5QaWN9KWA7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3BhdGNoeScpIHx8IGNvbmRpdGlvbi5pbmNsdWRlcygncGFydGx5IGNsb3VkeScpKSB7XG4gICAgICAgICAgICBjdXJyZW50V2VhdGhlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BhcnRDbG91ZFBpY30pYDtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcygnY2xvdWR5JykgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdvdmVyY2FzdCcpKSB7XG4gICAgICAgICAgICBjdXJyZW50V2VhdGhlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkUGljfSlgO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdkcml6emxlJykgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdsaWdodCByYWluJykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZHJpenpsZVBpY30pYDtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcygnc3Rvcm0nKSB8fCBjb25kaXRpb24uaW5jbHVkZXMoJ2xpZ2h0bmluZycpKSB7XG4gICAgICAgICAgICBjdXJyZW50V2VhdGhlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3N0b3JtUGljfSlgO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKCdyYWluJykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFpblBpY30pYDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhvdXJCb3godGltZVN0cmluZywgd2VhdGhlckNvbmRpdGlvblN0cmluZywgdGVtcGVyYXR1cmVTdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2codGltZVN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJDb25kaXRpb25TdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wZXJhdHVyZVN0cmluZyk7XG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yZWNhc3RCb3guY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtYm94Jyk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Qm94KTtcblxuICAgICAgICBjb25zdCBmb3JlY2FzdFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmb3JlY2FzdFRpbWUudGV4dENvbnRlbnQgPSB0aW1lU3RyaW5nO1xuICAgICAgICBmb3JlY2FzdEJveC5hcHBlbmRDaGlsZChmb3JlY2FzdFRpbWUpO1xuXG4gICAgICAgIC8vIHBsYWNlaG9sZGVyIGZvciBwdWxsaW5nIGljb25zXG4gICAgICAgIC8vIG1heWJlIG1ha2UgYSBzZXBhcmF0ZSBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5nIHdpY2ggaWNvbiB3aWxsIGdldCB1c2VkXG4gICAgICAgIC8vIGJhc2VkIG9uIHdoYXQgdGhlIHdlYXRoZXIgdGV4dCBzYXlzIGFuZCBjYWxsIGl0IGhlcmVcbiAgICAgICAgY29uc3QgYWN0aXZlSWNvbiA9IGdldENvcnJlY3RJY29uKHdlYXRoZXJDb25kaXRpb25TdHJpbmcpO1xuICAgICAgICBhY3RpdmVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWljb24nKTtcbiAgICAgICAgZm9yZWNhc3RCb3guYXBwZW5kQ2hpbGQoYWN0aXZlSWNvbilcblxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZvcmVjYXN0VGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlU3RyaW5nfSBGwrBgO1xuICAgICAgICBmb3JlY2FzdEJveC5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXApO1xuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVGb3JlY2FzdEJveGVzICgpIHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1ib3gnKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RCb3hlcyk7XG5cbiAgICAgICAgZm9yZWNhc3RCb3hlcy5mb3JFYWNoKGJveCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5yZW1vdmVDaGlsZChib3gpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50SW5mb3JtYXRpb24gKGNvbmRpdGlvbiwgdGVtcGVyYXR1cmUsIGxvY2F0aW9uLCB3ZWF0aGVyRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSlcbiAgICAgICAgY3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgICAgIGN1cnJlbnRDb25kaXRpb24uaW5uZXJIVE1MID0gYCR7Y29uZGl0aW9ufSwgJm5ic3A7Jm5ic3A7JHt0ZW1wZXJhdHVyZX1GwrBgXG5cbiAgICAgICAgLy8gcGVyaGFwcyB0cmlnZ2VyIGEgdGhlIGZ1bmN0aW9uIGhlcmUgdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG4gICAgICAgIC8vIG9mIHRoZSB3ZWF0aGVyLWNhcmQgYmFzZWQgb253IGhhdCB0aCBlY29uZGl0aW9uIGlzXG4gICAgICAgIGNoYW5nZVdlYXRoZXJCYWNrZ3JvdW5kKGNvbmRpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgXG5cblxuXG5cbiAgICByZXR1cm4geyBjcmVhdGVIb3VyQm94LCBcbiAgICAgICAgZ2V0Q29ycmVjdEljb24sIFxuICAgICAgICBkZWxldGVGb3JlY2FzdEJveGVzLCBcbiAgICAgICAgY2hhbmdlQ3VycmVudEluZm9ybWF0aW9uLFxuICAgICAgICBjaGFuZ2VXZWF0aGVyQmFja2dyb3VuZCBcbiAgICB9XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCB7IHdlYXRoZXJSZXF1ZXN0IH0gZnJvbSAnLi9yZXF1ZXN0QXBpJztcblxuXG5cbndlYXRoZXJSZXF1ZXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9