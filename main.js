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
/* harmony import */ var _imgs_overcast_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgs/overcast.jpg */ "./src/imgs/overcast.jpg");
/* harmony import */ var _imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imgs/sunny.jpg */ "./src/imgs/sunny.jpg");

















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

        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            currentWeatherCard.style.backgroundImage = `url(${_imgs_overcast_jpg__WEBPACK_IMPORTED_MODULE_11__})`;
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

/***/ "./src/imgs/overcast.jpg":
/*!*******************************!*\
  !*** ./src/imgs/overcast.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3db1947452c2288df334.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FBS0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5Qjs7OztBQUk5QywyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz9mOGE2Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9wcm9jZXNzQXBpLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvcmVxdWVzdEFwaS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuXG4ud2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogODN2aDtcbiAgICBtYXgtd2lkdGg6IDE4MHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMS4yZnI7XG4gICAgXG59XG5cbi50b3AtaGFsZiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNWZyIDFmcjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDVzO1xufVxuXG4uY3VycmVudC1pbmZvcm1hdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG59XG5cblxuLmRheXMtZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbn1cblxuXG5cblxuXG4uYm90dG9tLWhhbGYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JlY2FzdC1ob3VyLWhlYWRlciB7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggO1xuXG59XG5cbi5mb3JlY2FzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI0NywgMjQ3KTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgbWFyZ2luOiAgMHB4IDE1cHg7XG5cbn1cblxuLmZvcmVjYXN0LWJveCB7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmZvcmVjYXN0LWljb24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7Ozs7OztBQU1BO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxufVxcblxcbi53ZWF0aGVyLWNhcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDgzdmg7XFxuICAgIG1heC13aWR0aDogMTgwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEuMmZyO1xcbiAgICBcXG59XFxuXFxuLnRvcC1oYWxmIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjVmciAxZnI7XFxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgNXM7XFxufVxcblxcbi5jdXJyZW50LWluZm9ybWF0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuXFxuLmRheXMtZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcblxcblxcblxcblxcbi5ib3R0b20taGFsZiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91ci1oZWFkZXIge1xcbiAgICBtYXJnaW46IDEwcHggMTBweCA7XFxuXFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI0NywgMjQ3KTtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgbWFyZ2luOiAgMHB4IDE1cHg7XFxuXFxufVxcblxcbi5mb3JlY2FzdC1ib3gge1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNyZWF0ZSBvYmplY3QgdGhhdCBob2xkcyBBUEkgZGF0YSBwdWxsIGV2ZXJ5dGltZVxuLy8gb25lIGlzIHJlcXVlc3RlZFxuLy8gLi4uIHN0b3JlIHRoZSBvYmplY3Qgd2l0aGluIGFuIGFycmF5XG5cblxuLy8gYW4gaW5zdGFuY2Ugb2YgYSB3ZWF0aGVyIGluZm8gb2JqZWN0IHdvdWxkIG5lZWQgdG8gZ2V0IGRlbGV0ZWRcbi8vIG9uY2UgdGhlIHVzZXIgc2VhcmNoZXMgYSBuZXcgbG9jYXRpb25cbmltcG9ydCB7IHdlYXRoZXJSZXF1ZXN0IH0gZnJvbSBcIi4vcmVxdWVzdEFwaVwiO1xuaW1wb3J0IHsgY29udHJvbGxlckRPTSB9IGZyb20gXCIuL3VzZXJJbnRlcmZhY2VcIjtcblxuXG5jb25zdCBjdXJyZW50V2VhdGhlck9iamVjdCA9IHtcbiAgICBjdXJyZW50V2VhdGhlcjogJycsXG5cbiAgICBjdXJyZW50VGVtcDogJycsXG5cbiAgICBhaXJRdWFsaXR5OiAnJyxcblxuICAgIHRpbWU6ICcnXG59XG5cbmNvbnN0IGN1cnJlbnRGb3JlY2FzdE9iamVjdCA9IHtcblxufVxuXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBwcm9jZXNzQXBpQ29udHJvbGxlciA9IGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgY29uc3QgRE9NUnVuID0gY29udHJvbGxlckRPTSgpO1xuICAgXG5cblxuICAgIGZ1bmN0aW9uIGdhdGhlckN1cnJlbnRXZWF0aGVyKCkge1xuICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgICAgICAgRE9NUnVuLmNoYW5nZUN1cnJlbnRJbmZvcm1hdGlvbih3ZWF0aGVyQ29uZGl0aW9uLCBjdXJyZW50VGVtcGVyYXR1cmUsIGN1cnJlbnRMb2NhdGlvbilcbiAgICB9XG5cblxuICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGVhY2ggZm9yZWNhc3QncyBob3VyJ3MgaW5mb3JtYXRpb25cbiAgICAvLyBjcmVhdGUgYSBmdW5jdGlvbiBmYWN0b3J5IHRvIHJlZHVjZSBjb2RlXG5cbiAgICBmdW5jdGlvbiBnYXRoZXJIb3VyRm9yZWNhc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXkgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERheSk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBhIHJ1biBvZiB0aGUgY3JlYXRlRm9yZWNhc3RCb3ggZnVuY2l0b24gaGVyZT9cbiAgICAgICAgZm9yZWNhc3REYXkuZm9yRWFjaChob3VyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBob3VyLnRpbWUuc2xpY2UoLTUpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25TdHJpbmcgPSBob3VyLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZVN0cmluZyA9IGhvdXIudGVtcF9mXG5cbiAgICAgICAgICAgIERPTVJ1bi5jcmVhdGVIb3VyQm94KHRpbWVTdHJpbmcsIHdlYXRoZXJDb25kaXRpb25TdHJpbmcsIHRlbXBlcmF0dXJlU3RyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZ2V0VG9tb3Jyb3dXZWF0aGVyKCkge1xuICAgICAgICBjb25zdCB0b21vcnJvd1dlYXRoZXIgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXVxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd1dlYXRoZXIpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93RGF0ZSA9IHRvbW9ycm93V2VhdGhlci5kYXRlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0RhdGUpXG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSB0b21vcnJvd1dlYXRoZXIuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0NvbmRpdGlvbik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dIaWdoID0gdG9tb3Jyb3dXZWF0aGVyLmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93SGlnaCk7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dMb3cgPSB0b21vcnJvd1dlYXRoZXIuZGF5Lm1pbnRlbXBfZjtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dMb3cpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUd29EYXlzV2VhdGhlcigpIHtcbiAgICAgICAgY29uc3QgdG9tb3Jyb3dXZWF0aGVyMiA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdXG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93V2VhdGhlcjIpO1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93RGF0ZTIgPSB0b21vcnJvd1dlYXRoZXIyLmRhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93RGF0ZTIpXG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24yID0gdG9tb3Jyb3dXZWF0aGVyMi5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93Q29uZGl0aW9uMik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dIaWdoMiA9IHRvbW9ycm93V2VhdGhlcjIuZGF5Lm1heHRlbXBfZjtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dIaWdoMik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dMb3cyID0gdG9tb3Jyb3dXZWF0aGVyMi5kYXkubWludGVtcF9mO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0xvdzIpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7Z2F0aGVyQ3VycmVudFdlYXRoZXIsIFxuICAgICAgICBnYXRoZXJIb3VyRm9yZWNhc3QsIFxuICAgICAgICBnZXRUb21vcnJvd1dlYXRoZXIsIFxuICAgICAgICBnZXRUd29EYXlzV2VhdGhlclxuICAgIH1cbn0iLCIvLyBjcmVhdGUgYXBpIHJlcXVlc3QgaGVyZVxuaW1wb3J0IHsgcHJvY2Vzc0FwaUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9jZXNzQXBpXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyRE9NIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuXG5jb25zdCBhcGlUZW1wbGF0ZSA9IHtcbiAgICBiYXNlOiAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0yOTFmZWZhNTQ2MWE0MjcyODVhMTUwNDI4MjQwMzAyJnE9JyxcblxuICAgIHVzZXJMb2NhdGlvbjogJ2NoaWNhZ28nLFxuXG4gICAgc2Vjb25kQmFzZTogJyZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ubydcbn1cblxuLy8gcG9zc2libHkgd2lsbCBoZWxwIGNoYW5nZSBvdmVyIGRhdGEgZWFjaCB0aW1lIGEgbmV3IGxvY2F0aW9uIGlzIHNlYXJjaGVkOlxubGV0IGFjdGl2ZVVybCA9ICcnXG5sZXQgYWN0aXZlV2VhdGhlckRhdGEgPSAnJ1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3Qgd2VhdGhlclJlcXVlc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZWFybHlET01SdW4gPSBjb250cm9sbGVyRE9NKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBhY3RpdmVVcmwgPSBgJHthcGlUZW1wbGF0ZS5iYXNlfSR7YXBpVGVtcGxhdGUudXNlckxvY2F0aW9ufSR7YXBpVGVtcGxhdGUuc2Vjb25kQmFzZX1gXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVVybClcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVRlbXBsYXRlLmJhc2V9JHthcGlUZW1wbGF0ZS51c2VyTG9jYXRpb259JHthcGlUZW1wbGF0ZS5zZWNvbmRCYXNlfWAsXG4gICAgICAgIHttb2RlOiAnY29ycyd9KVxuXG4gICAgICAgIGlmIChhcGlUZW1wbGF0ZS51c2VyTG9jYXRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWxlcnQgdG91Y2hlZCcpXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHR5cGUgYSBsb2NhdGlvbiBpbnRvIHRoZSBzZWFyY2ggYmFyJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uIScpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZmFpbGVkJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBhY3RpdmVXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWF0aGVyRGF0YSk7XG5cbiAgICAgICAgZWFybHlET01SdW4uZGVsZXRlRm9yZWNhc3RCb3hlcygpO1xuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NSdW4gPSBwcm9jZXNzQXBpQ29udHJvbGxlcihhY3RpdmVXZWF0aGVyRGF0YSk7XG4gICAgICAgIHByb2Nlc3NSdW4uZ2F0aGVyQ3VycmVudFdlYXRoZXIoKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nYXRoZXJIb3VyRm9yZWNhc3QoKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nZXRUb21vcnJvd1dlYXRoZXIoKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nZXRUd29EYXlzV2VhdGhlcigpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICAgIFxuXG59XG5cblxuY29uc3QgZGVsZXRlUmVxdWVzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVVybCk7XG5cbiAgICBjb25zdCBkZWxldGVSZXMgPSBhd2FpdCBmZXRjaChgJHthY3RpdmVVcmx9YCwgXG4gICAgeyBtb2RlOiAnY29ycycsIG1ldGhvZDogJ0RFTEVURSd9KVxuXG4gICAgaWYgKCFkZWxldGVSZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWxldGUgUmVxdWVzdCBmYWlsZWQnKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGVsZXRlUmVzKTtcbiAgICBjb25zdCBkZWxldGVEYXRhID0gYXdhaXQgZGVsZXRlUmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkZWxldGVEYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKCdkZWxldGUgc3VjY2Vzc2Z1bCcpO1xuICAgIGFjdGl2ZVdlYXRoZXJEYXRhID0gZGVsZXRlUmVzO1xuXG5cbiAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWF0aGVyRGF0YSlcbiAgICBcbn1cblxuXG5cbi8vIGNyZWF0ZSB1c2VyRm9ybSBsb2dpYyBoZXJlXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idXR0b24nKTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIC8vIGFsc28gaGF2ZSB0byBjaGFuZ2UgdGhlIHZhbHVlIG9mICd1c2VyTG9jYXRpb24nIGhlcmUsIHNvIHRoYXQgXG4gICAgLy8gdGhlIG5ldyBBUEkgcmVxdWVzdCB1c2VzIHdoYXQgdGhlIHVzZXIgdHlwZWQgaW5cbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBjb25zdCBET01SdW4yID0gY29udHJvbGxlckRPTSgpO1xuICAgIC8vIERPTVJ1bjIuZGVsZXRlRm9yZWNhc3RCb3hlcygpO1xuXG4gICAgY29uc29sZS5sb2coc2VhcmNoQmFyLnZhbHVlKTtcbiAgICBhcGlUZW1wbGF0ZS51c2VyTG9jYXRpb24gPSBzZWFyY2hCYXIudmFsdWU7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ3dlYXRoZXIgc2VhcmNoZWQnKTtcbiAgICBkZWxldGVSZXF1ZXN0KCk7XG4gICAgd2VhdGhlclJlcXVlc3QoKTtcbn0pXG5cblxuIiwiaW1wb3J0IHsgcHJvY2Vzc0FwaUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9jZXNzQXBpXCI7XG5cbmltcG9ydCBzdW4gZnJvbSBcIi4vaWNvbnMvc3VuLnBuZ1wiO1xuaW1wb3J0IGNsb3VkcyBmcm9tIFwiLi9pY29ucy9jbG91ZHMucG5nXCI7XG5pbXBvcnQgcmFpbiBmcm9tIFwiLi9pY29ucy9yYWluLnBuZ1wiO1xuaW1wb3J0IHNjYXR0ZXJlZCBmcm9tIFwiLi9pY29ucy9zY2F0dGVyZWQucG5nXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi9pY29ucy9zbm93LnBuZ1wiO1xuaW1wb3J0IHBhcnRseUNsb3VkeSBmcm9tIFwiLi9pY29ucy9wYXJ0bHktY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IHN0b3JtIGZyb20gXCIuL2ljb25zL3N0b3JtLnBuZ1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4vaWNvbnMvbWlzdC5wbmdcIjtcbmltcG9ydCBkcml6emxlIGZyb20gXCIuL2ljb25zL2RyaXp6bGUucG5nXCI7XG5pbXBvcnQgZm9nIGZyb20gXCIuL2ljb25zL2ZvZy5wbmdcIjtcblxuaW1wb3J0IGNsb3VkUGljIGZyb20gXCIuL2ltZ3Mvb3ZlcmNhc3QuanBnXCI7XG5pbXBvcnQgc3VuUGljIGZyb20gXCIuL2ltZ3Mvc3VubnkuanBnXCI7XG5cblxuY29uc3Qgd2VhdGhlckNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jYXJkLWNvbnRhaW5lcicpO1xuXG5jb25zdCB0b3BIYWxmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndG9wLWhhbGYnKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItY2FyZCcpO1xuY29uc3QgY3VycmVudEluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaW5mb3JtYXRpb24nKTtcbmNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWxvY2F0aW9uJyk7XG5jb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY29uZGl0aW9uJyk7XG5jb25zdCBkYXlzRm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cy1mb3JlY2FzdC1jb250YWluZXInKTtcblxuY29uc3QgYm90dG9tSGFsZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvdHRvbS1oYWxmJyk7XG5jb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1jb250YWluZXInKTtcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXJET00gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRDb3JyZWN0SWNvbih3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJTdHJpbmcgPSB3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nLnRvTG93ZXJDYXNlKClcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlclN0cmluZyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhY3RpdmVJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJTdHJpbmcgPT09ICdzdW5ueScgfHwgd2VhdGhlclN0cmluZy5pbmNsdWRlcygnY2xlYXInKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBzdW5cblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3BhcnRseSBjbG91ZHknKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBwYXJ0bHlDbG91ZHk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdsaWdodCByYWluJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gZHJpenpsZVxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnY2xvdWR5JykgfHwgd2VhdGhlclN0cmluZy5pbmNsdWRlcygnb3ZlcmNhc3QnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBjbG91ZHNcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3BhdGNoeScpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHNjYXR0ZXJlZFxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnc25vdycpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHNub3dcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ3N0b3JtJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gc3Rvcm1cblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ21pc3QnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBtaXN0XG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdkcml6emxlJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gZHJpenpsZVxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygncmFpbicpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHJhaW5cblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ2ZvZycpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IGZvZ1xuXG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICByZXR1cm4gYWN0aXZlSWNvblxuXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlV2VhdGhlckJhY2tncm91bmQoY29uZGl0aW9uU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGNvbmRpdGlvblN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ3N1bm55JykgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdjbGVhcicpKSB7XG4gICAgICAgICAgICBjdXJyZW50V2VhdGhlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3N1blBpY30pYDtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcygnY2xvdWR5JykgfHwgY29uZGl0aW9uLmluY2x1ZGVzKCdvdmVyY2FzdCcpKSB7XG4gICAgICAgICAgICBjdXJyZW50V2VhdGhlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkUGljfSlgO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSG91ckJveCh0aW1lU3RyaW5nLCB3ZWF0aGVyQ29uZGl0aW9uU3RyaW5nLCB0ZW1wZXJhdHVyZVN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aW1lU3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckNvbmRpdGlvblN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBlcmF0dXJlU3RyaW5nKTtcblxuICAgICAgICBjb25zdCBmb3JlY2FzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JlY2FzdEJveC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1ib3gnKTtcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCb3gpO1xuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZvcmVjYXN0VGltZS50ZXh0Q29udGVudCA9IHRpbWVTdHJpbmc7XG4gICAgICAgIGZvcmVjYXN0Qm94LmFwcGVuZENoaWxkKGZvcmVjYXN0VGltZSk7XG5cbiAgICAgICAgLy8gcGxhY2Vob2xkZXIgZm9yIHB1bGxpbmcgaWNvbnNcbiAgICAgICAgLy8gbWF5YmUgbWFrZSBhIHNlcGFyYXRlIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmcgd2ljaCBpY29uIHdpbGwgZ2V0IHVzZWRcbiAgICAgICAgLy8gYmFzZWQgb24gd2hhdCB0aGUgd2VhdGhlciB0ZXh0IHNheXMgYW5kIGNhbGwgaXQgaGVyZVxuICAgICAgICBjb25zdCBhY3RpdmVJY29uID0gZ2V0Q29ycmVjdEljb24od2VhdGhlckNvbmRpdGlvblN0cmluZyk7XG4gICAgICAgIGFjdGl2ZUljb24uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtaWNvbicpO1xuICAgICAgICBmb3JlY2FzdEJveC5hcHBlbmRDaGlsZChhY3RpdmVJY29uKVxuXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3RUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZm9yZWNhc3RUZW1wLnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmVTdHJpbmd9IEbCsGA7XG4gICAgICAgIGZvcmVjYXN0Qm94LmFwcGVuZENoaWxkKGZvcmVjYXN0VGVtcCk7XG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZvcmVjYXN0Qm94ZXMgKCkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LWJveCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEJveGVzKTtcblxuICAgICAgICBmb3JlY2FzdEJveGVzLmZvckVhY2goYm94ID0+IHtcbiAgICAgICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGJveCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRJbmZvcm1hdGlvbiAoY29uZGl0aW9uLCB0ZW1wZXJhdHVyZSwgbG9jYXRpb24pIHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgICAgIGN1cnJlbnRDb25kaXRpb24uaW5uZXJIVE1MID0gYCR7Y29uZGl0aW9ufSwgJm5ic3A7Jm5ic3A7JHt0ZW1wZXJhdHVyZX1GwrBgXG5cbiAgICAgICAgLy8gcGVyaGFwcyB0cmlnZ2VyIGEgdGhlIGZ1bmN0aW9uIGhlcmUgdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG4gICAgICAgIC8vIG9mIHRoZSB3ZWF0aGVyLWNhcmQgYmFzZWQgb253IGhhdCB0aCBlY29uZGl0aW9uIGlzXG4gICAgICAgIGNoYW5nZVdlYXRoZXJCYWNrZ3JvdW5kKGNvbmRpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgXG5cblxuXG5cbiAgICByZXR1cm4geyBjcmVhdGVIb3VyQm94LCBcbiAgICAgICAgZ2V0Q29ycmVjdEljb24sIFxuICAgICAgICBkZWxldGVGb3JlY2FzdEJveGVzLCBcbiAgICAgICAgY2hhbmdlQ3VycmVudEluZm9ybWF0aW9uLFxuICAgICAgICBjaGFuZ2VXZWF0aGVyQmFja2dyb3VuZCBcbiAgICB9XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCB7IHdlYXRoZXJSZXF1ZXN0IH0gZnJvbSAnLi9yZXF1ZXN0QXBpJztcblxuXG5cbndlYXRoZXJSZXF1ZXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9