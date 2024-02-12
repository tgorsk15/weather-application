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
    /* background-image: url('./imgs/overcast.jpg'); */
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kDAAkD;AACtD;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;AAClB;;;;;;AAMA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,gBAAgB;IAChB,iBAAiB;;AAErB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["html {\n    height: 100%;\n    /* display: flex; */\n    /* align-items: center; */\n}\n\nbody {\n    min-height: 100%;\n    background-color: burlywood;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n}\n\n.weather-card-container {\n    background-color: white;\n    min-height: 83vh;\n    max-width: 180vh;\n    display: grid;\n    grid-template-rows: 2fr 1.2fr;\n    \n}\n\n.top-half {\n    display: grid;\n    grid-template-columns: 3.5fr 1fr;\n    padding: 0px 15px;\n    padding-top: 15px;\n}\n\n.current-weather-card {\n    grid-column: 1;\n    /* background-image: url('./imgs/overcast.jpg'); */\n}\n\n.current-information {\n    margin-left: 40px;\n    margin-top: 40px;\n    /* color: white; */\n}\n\n\n.days-forecast-container {\n    grid-column: 2;\n}\n\n\n\n\n\n.bottom-half {\n    width: 100%;\n    overflow: hidden;\n}\n\n.forecast-hour-header {\n    margin: 10px 10px ;\n\n}\n\n.forecast-container {\n    display: flex;\n    min-width: 100%;\n    background-color: rgb(223, 247, 247);\n    height: 170px;\n    overflow-x: auto;\n    margin:  0px 15px;\n\n}\n\n.forecast-box {\n    min-height: 80px;\n    min-width: 100px;\n    background-color: lightsalmon;\n    margin: 10px;\n}\n\n.forecast-icon {\n    height: 50px;\n    width: 50px;\n}"],"sourceRoot":""}]);
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


    function changeWeatherBackground(condition) {
        
        if (condition.includes('cloudy') || condition.includes('overcast')) {
            // currentWeatherCard.style.backgroundImage = "url('./imgs/overcast.jpg')";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5Qjs7OztBQUk5QywyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz9mOGE2Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9wcm9jZXNzQXBpLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvcmVxdWVzdEFwaS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuXG4ud2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogODN2aDtcbiAgICBtYXgtd2lkdGg6IDE4MHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMS4yZnI7XG4gICAgXG59XG5cbi50b3AtaGFsZiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuNWZyIDFmcjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jYXJkIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy9vdmVyY2FzdC5qcGcnKTsgKi9cbn1cblxuLmN1cnJlbnQtaW5mb3JtYXRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuXG5cbi5kYXlzLWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG59XG5cblxuXG5cblxuLmJvdHRvbS1oYWxmIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9yZWNhc3QtaG91ci1oZWFkZXIge1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDtcblxufVxuXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyNDcsIDI0Nyk7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1hcmdpbjogIDBweCAxNXB4O1xuXG59XG5cbi5mb3JlY2FzdC1ib3gge1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5mb3JlY2FzdC1pY29uIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOzs7Ozs7QUFNQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG4ud2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiA4M3ZoO1xcbiAgICBtYXgtd2lkdGg6IDE4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjJmcjtcXG4gICAgXFxufVxcblxcbi50b3AtaGFsZiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy41ZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItY2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy9vdmVyY2FzdC5qcGcnKTsgKi9cXG59XFxuXFxuLmN1cnJlbnQtaW5mb3JtYXRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5cXG4uZGF5cy1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmJvdHRvbS1oYWxmIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5mb3JlY2FzdC1ob3VyLWhlYWRlciB7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDtcXG5cXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQ3LCAyNDcpO1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBtYXJnaW46ICAwcHggMTVweDtcXG5cXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY3JlYXRlIG9iamVjdCB0aGF0IGhvbGRzIEFQSSBkYXRhIHB1bGwgZXZlcnl0aW1lXG4vLyBvbmUgaXMgcmVxdWVzdGVkXG4vLyAuLi4gc3RvcmUgdGhlIG9iamVjdCB3aXRoaW4gYW4gYXJyYXlcblxuXG4vLyBhbiBpbnN0YW5jZSBvZiBhIHdlYXRoZXIgaW5mbyBvYmplY3Qgd291bGQgbmVlZCB0byBnZXQgZGVsZXRlZFxuLy8gb25jZSB0aGUgdXNlciBzZWFyY2hlcyBhIG5ldyBsb2NhdGlvblxuaW1wb3J0IHsgd2VhdGhlclJlcXVlc3QgfSBmcm9tIFwiLi9yZXF1ZXN0QXBpXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyRE9NIH0gZnJvbSBcIi4vdXNlckludGVyZmFjZVwiO1xuXG5cbmNvbnN0IGN1cnJlbnRXZWF0aGVyT2JqZWN0ID0ge1xuICAgIGN1cnJlbnRXZWF0aGVyOiAnJyxcblxuICAgIGN1cnJlbnRUZW1wOiAnJyxcblxuICAgIGFpclF1YWxpdHk6ICcnLFxuXG4gICAgdGltZTogJydcbn1cblxuY29uc3QgY3VycmVudEZvcmVjYXN0T2JqZWN0ID0ge1xuXG59XG5cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IHByb2Nlc3NBcGlDb250cm9sbGVyID0gZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBjb25zdCBET01SdW4gPSBjb250cm9sbGVyRE9NKCk7XG4gICBcblxuXG4gICAgZnVuY3Rpb24gZ2F0aGVyQ3VycmVudFdlYXRoZXIoKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudExvY2F0aW9uKTtcblxuICAgICAgICBET01SdW4uY2hhbmdlQ3VycmVudEluZm9ybWF0aW9uKHdlYXRoZXJDb25kaXRpb24sIGN1cnJlbnRUZW1wZXJhdHVyZSwgY3VycmVudExvY2F0aW9uKVxuICAgIH1cblxuXG4gICAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgZWFjaCBmb3JlY2FzdCdzIGhvdXIncyBpbmZvcm1hdGlvblxuICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIGZhY3RvcnkgdG8gcmVkdWNlIGNvZGVcblxuICAgIGZ1bmN0aW9uIGdhdGhlckhvdXJGb3JlY2FzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5KTtcblxuICAgICAgICAvLyB0cmlnZ2VyIGEgcnVuIG9mIHRoZSBjcmVhdGVGb3JlY2FzdEJveCBmdW5jaXRvbiBoZXJlP1xuICAgICAgICBmb3JlY2FzdERheS5mb3JFYWNoKGhvdXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGhvdXIudGltZS5zbGljZSgtNSlcblxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvblN0cmluZyA9IGhvdXIuY29uZGl0aW9uLnRleHQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlU3RyaW5nID0gaG91ci50ZW1wX2ZcblxuICAgICAgICAgICAgRE9NUnVuLmNyZWF0ZUhvdXJCb3godGltZVN0cmluZywgd2VhdGhlckNvbmRpdGlvblN0cmluZywgdGVtcGVyYXR1cmVTdHJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBnZXRUb21vcnJvd1dlYXRoZXIoKSB7XG4gICAgICAgIGNvbnN0IHRvbW9ycm93V2VhdGhlciA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdXG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93V2VhdGhlcik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dEYXRlID0gdG9tb3Jyb3dXZWF0aGVyLmRhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93RGF0ZSlcblxuICAgICAgICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbiA9IHRvbW9ycm93V2VhdGhlci5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93Q29uZGl0aW9uKTtcblxuICAgICAgICBjb25zdCB0b21vcnJvd0hpZ2ggPSB0b21vcnJvd1dlYXRoZXIuZGF5Lm1heHRlbXBfZjtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dIaWdoKTtcblxuICAgICAgICBjb25zdCB0b21vcnJvd0xvdyA9IHRvbW9ycm93V2VhdGhlci5kYXkubWludGVtcF9mO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0xvdyk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFR3b0RheXNXZWF0aGVyKCkge1xuICAgICAgICBjb25zdCB0b21vcnJvd1dlYXRoZXIyID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl1cbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dXZWF0aGVyMik7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3dEYXRlMiA9IHRvbW9ycm93V2VhdGhlcjIuZGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dEYXRlMilcblxuICAgICAgICBjb25zdCB0b21vcnJvd0NvbmRpdGlvbjIgPSB0b21vcnJvd1dlYXRoZXIyLmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3dDb25kaXRpb24yKTtcblxuICAgICAgICBjb25zdCB0b21vcnJvd0hpZ2gyID0gdG9tb3Jyb3dXZWF0aGVyMi5kYXkubWF4dGVtcF9mO1xuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvd0hpZ2gyKTtcblxuICAgICAgICBjb25zdCB0b21vcnJvd0xvdzIgPSB0b21vcnJvd1dlYXRoZXIyLmRheS5taW50ZW1wX2Y7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93TG93Mik7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnYXRoZXJDdXJyZW50V2VhdGhlciwgXG4gICAgICAgIGdhdGhlckhvdXJGb3JlY2FzdCwgXG4gICAgICAgIGdldFRvbW9ycm93V2VhdGhlciwgXG4gICAgICAgIGdldFR3b0RheXNXZWF0aGVyXG4gICAgfVxufSIsIi8vIGNyZWF0ZSBhcGkgcmVxdWVzdCBoZXJlXG5pbXBvcnQgeyBwcm9jZXNzQXBpQ29udHJvbGxlciB9IGZyb20gXCIuL3Byb2Nlc3NBcGlcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXJET00gfSBmcm9tIFwiLi91c2VySW50ZXJmYWNlXCI7XG5cbmNvbnN0IGFwaVRlbXBsYXRlID0ge1xuICAgIGJhc2U6ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTI5MWZlZmE1NDYxYTQyNzI4NWExNTA0MjgyNDAzMDImcT0nLFxuXG4gICAgdXNlckxvY2F0aW9uOiAnY2hpY2FnbycsXG5cbiAgICBzZWNvbmRCYXNlOiAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJ1xufVxuXG4vLyBwb3NzaWJseSB3aWxsIGhlbHAgY2hhbmdlIG92ZXIgZGF0YSBlYWNoIHRpbWUgYSBuZXcgbG9jYXRpb24gaXMgc2VhcmNoZWQ6XG5sZXQgYWN0aXZlVXJsID0gJydcbmxldCBhY3RpdmVXZWF0aGVyRGF0YSA9ICcnXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCB3ZWF0aGVyUmVxdWVzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBlYXJseURPTVJ1biA9IGNvbnRyb2xsZXJET00oKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGFjdGl2ZVVybCA9IGAke2FwaVRlbXBsYXRlLmJhc2V9JHthcGlUZW1wbGF0ZS51c2VyTG9jYXRpb259JHthcGlUZW1wbGF0ZS5zZWNvbmRCYXNlfWBcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVXJsKVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVGVtcGxhdGUuYmFzZX0ke2FwaVRlbXBsYXRlLnVzZXJMb2NhdGlvbn0ke2FwaVRlbXBsYXRlLnNlY29uZEJhc2V9YCxcbiAgICAgICAge21vZGU6ICdjb3JzJ30pXG5cbiAgICAgICAgaWYgKGFwaVRlbXBsYXRlLnVzZXJMb2NhdGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbGVydCB0b3VjaGVkJylcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgdHlwZSBhIGxvY2F0aW9uIGludG8gdGhlIHNlYXJjaCBiYXInKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24hJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBmYWlsZWQnKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGFjdGl2ZVdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVdlYXRoZXJEYXRhKTtcblxuICAgICAgICBlYXJseURPTVJ1bi5kZWxldGVGb3JlY2FzdEJveGVzKCk7XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1J1biA9IHByb2Nlc3NBcGlDb250cm9sbGVyKGFjdGl2ZVdlYXRoZXJEYXRhKTtcbiAgICAgICAgcHJvY2Vzc1J1bi5nYXRoZXJDdXJyZW50V2VhdGhlcigpO1xuICAgICAgICBwcm9jZXNzUnVuLmdhdGhlckhvdXJGb3JlY2FzdCgpO1xuICAgICAgICBwcm9jZXNzUnVuLmdldFRvbW9ycm93V2VhdGhlcigpO1xuICAgICAgICBwcm9jZXNzUnVuLmdldFR3b0RheXNXZWF0aGVyKCk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gICAgXG5cbn1cblxuXG5jb25zdCBkZWxldGVSZXF1ZXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc29sZS5sb2coYWN0aXZlVXJsKTtcblxuICAgIGNvbnN0IGRlbGV0ZVJlcyA9IGF3YWl0IGZldGNoKGAke2FjdGl2ZVVybH1gLCBcbiAgICB7IG1vZGU6ICdjb3JzJywgbWV0aG9kOiAnREVMRVRFJ30pXG5cbiAgICBpZiAoIWRlbGV0ZVJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlbGV0ZSBSZXF1ZXN0IGZhaWxlZCcpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkZWxldGVSZXMpO1xuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSBhd2FpdCBkZWxldGVSZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRlbGV0ZURhdGEpO1xuXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZSBzdWNjZXNzZnVsJyk7XG4gICAgYWN0aXZlV2VhdGhlckRhdGEgPSBkZWxldGVSZXM7XG5cblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVdlYXRoZXJEYXRhKVxuICAgIFxufVxuXG5cblxuLy8gY3JlYXRlIHVzZXJGb3JtIGxvZ2ljIGhlcmVcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgLy8gYWxzbyBoYXZlIHRvIGNoYW5nZSB0aGUgdmFsdWUgb2YgJ3VzZXJMb2NhdGlvbicgaGVyZSwgc28gdGhhdCBcbiAgICAvLyB0aGUgbmV3IEFQSSByZXF1ZXN0IHVzZXMgd2hhdCB0aGUgdXNlciB0eXBlZCBpblxuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGNvbnN0IERPTVJ1bjIgPSBjb250cm9sbGVyRE9NKCk7XG4gICAgLy8gRE9NUnVuMi5kZWxldGVGb3JlY2FzdEJveGVzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhzZWFyY2hCYXIudmFsdWUpO1xuICAgIGFwaVRlbXBsYXRlLnVzZXJMb2NhdGlvbiA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnd2VhdGhlciBzZWFyY2hlZCcpO1xuICAgIGRlbGV0ZVJlcXVlc3QoKTtcbiAgICB3ZWF0aGVyUmVxdWVzdCgpO1xufSlcblxuXG4iLCJpbXBvcnQgeyBwcm9jZXNzQXBpQ29udHJvbGxlciB9IGZyb20gXCIuL3Byb2Nlc3NBcGlcIjtcblxuaW1wb3J0IHN1biBmcm9tIFwiLi9pY29ucy9zdW4ucG5nXCI7XG5pbXBvcnQgY2xvdWRzIGZyb20gXCIuL2ljb25zL2Nsb3Vkcy5wbmdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuL2ljb25zL3JhaW4ucG5nXCI7XG5pbXBvcnQgc2NhdHRlcmVkIGZyb20gXCIuL2ljb25zL3NjYXR0ZXJlZC5wbmdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuL2ljb25zL3Nub3cucG5nXCI7XG5pbXBvcnQgcGFydGx5Q2xvdWR5IGZyb20gXCIuL2ljb25zL3BhcnRseS1jbG91ZHkucG5nXCI7XG5pbXBvcnQgc3Rvcm0gZnJvbSBcIi4vaWNvbnMvc3Rvcm0ucG5nXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi9pY29ucy9taXN0LnBuZ1wiO1xuaW1wb3J0IGRyaXp6bGUgZnJvbSBcIi4vaWNvbnMvZHJpenpsZS5wbmdcIjtcbmltcG9ydCBmb2cgZnJvbSBcIi4vaWNvbnMvZm9nLnBuZ1wiO1xuXG5pbXBvcnQgY2xvdWRQaWMgZnJvbSBcIi4vaW1ncy9vdmVyY2FzdC5qcGdcIjtcblxuXG5jb25zdCB3ZWF0aGVyQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQtY29udGFpbmVyJyk7XG5cbmNvbnN0IHRvcEhhbGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0b3AtaGFsZicpO1xuY29uc3QgY3VycmVudFdlYXRoZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlci1jYXJkJyk7XG5jb25zdCBjdXJyZW50SW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1pbmZvcm1hdGlvbicpO1xuY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtbG9jYXRpb24nKTtcbmNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jb25kaXRpb24nKTtcbmNvbnN0IGRheXNGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuXG5jb25zdCBib3R0b21IYWxmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm90dG9tLWhhbGYnKTtcbmNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWNvbnRhaW5lcicpO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgY29udHJvbGxlckRPTSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGdldENvcnJlY3RJY29uKHdlYXRoZXJDb25kaXRpb25TdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlclN0cmluZyA9IHdlYXRoZXJDb25kaXRpb25TdHJpbmcudG9Mb3dlckNhc2UoKVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyU3RyaW5nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFjdGl2ZUljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpZiAod2VhdGhlclN0cmluZyA9PT0gJ3N1bm55JyB8fCB3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdjbGVhcicpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHN1blxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygncGFydGx5IGNsb3VkeScpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IHBhcnRseUNsb3VkeTtcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ2xpZ2h0IHJhaW4nKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBkcml6emxlXG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdjbG91ZHknKSB8fCB3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdvdmVyY2FzdCcpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IGNsb3Vkc1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygncGF0Y2h5JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gc2NhdHRlcmVkXG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdzbm93JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gc25vd1xuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnc3Rvcm0nKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBzdG9ybVxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnbWlzdCcpKSB7XG4gICAgICAgICAgICBhY3RpdmVJY29uLnNyYyA9IG1pc3RcblxuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXJTdHJpbmcuaW5jbHVkZXMoJ2RyaXp6bGUnKSkge1xuICAgICAgICAgICAgYWN0aXZlSWNvbi5zcmMgPSBkcml6emxlXG5cbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyU3RyaW5nLmluY2x1ZGVzKCdyYWluJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gcmFpblxuXG4gICAgICAgIH0gZWxzZSBpZiAod2VhdGhlclN0cmluZy5pbmNsdWRlcygnZm9nJykpIHtcbiAgICAgICAgICAgIGFjdGl2ZUljb24uc3JjID0gZm9nXG5cbiAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIHJldHVybiBhY3RpdmVJY29uXG5cbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VXZWF0aGVyQmFja2dyb3VuZChjb25kaXRpb24pIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb25kaXRpb24uaW5jbHVkZXMoJ2Nsb3VkeScpIHx8IGNvbmRpdGlvbi5pbmNsdWRlcygnb3ZlcmNhc3QnKSkge1xuICAgICAgICAgICAgLy8gY3VycmVudFdlYXRoZXJDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltZ3Mvb3ZlcmNhc3QuanBnJylcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhvdXJCb3godGltZVN0cmluZywgd2VhdGhlckNvbmRpdGlvblN0cmluZywgdGVtcGVyYXR1cmVTdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2codGltZVN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJDb25kaXRpb25TdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wZXJhdHVyZVN0cmluZyk7XG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yZWNhc3RCb3guY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtYm94Jyk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Qm94KTtcblxuICAgICAgICBjb25zdCBmb3JlY2FzdFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmb3JlY2FzdFRpbWUudGV4dENvbnRlbnQgPSB0aW1lU3RyaW5nO1xuICAgICAgICBmb3JlY2FzdEJveC5hcHBlbmRDaGlsZChmb3JlY2FzdFRpbWUpO1xuXG4gICAgICAgIC8vIHBsYWNlaG9sZGVyIGZvciBwdWxsaW5nIGljb25zXG4gICAgICAgIC8vIG1heWJlIG1ha2UgYSBzZXBhcmF0ZSBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5nIHdpY2ggaWNvbiB3aWxsIGdldCB1c2VkXG4gICAgICAgIC8vIGJhc2VkIG9uIHdoYXQgdGhlIHdlYXRoZXIgdGV4dCBzYXlzIGFuZCBjYWxsIGl0IGhlcmVcbiAgICAgICAgY29uc3QgYWN0aXZlSWNvbiA9IGdldENvcnJlY3RJY29uKHdlYXRoZXJDb25kaXRpb25TdHJpbmcpO1xuICAgICAgICBhY3RpdmVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWljb24nKTtcbiAgICAgICAgZm9yZWNhc3RCb3guYXBwZW5kQ2hpbGQoYWN0aXZlSWNvbilcblxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZvcmVjYXN0VGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlU3RyaW5nfSBGwrBgO1xuICAgICAgICBmb3JlY2FzdEJveC5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXApO1xuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVGb3JlY2FzdEJveGVzICgpIHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1ib3gnKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RCb3hlcyk7XG5cbiAgICAgICAgZm9yZWNhc3RCb3hlcy5mb3JFYWNoKGJveCA9PiB7XG4gICAgICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5yZW1vdmVDaGlsZChib3gpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50SW5mb3JtYXRpb24gKGNvbmRpdGlvbiwgdGVtcGVyYXR1cmUsIGxvY2F0aW9uKSB7XG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xuICAgICAgICBjdXJyZW50Q29uZGl0aW9uLmlubmVySFRNTCA9IGAke2NvbmRpdGlvbn0sICZuYnNwOyZuYnNwOyR7dGVtcGVyYXR1cmV9RsKwYFxuXG4gICAgICAgIC8vIHBlcmhhcHMgdHJpZ2dlciBhIHRoZSBmdW5jdGlvbiBoZXJlIHRoYXQgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBpbWFnZVxuICAgICAgICAvLyBvZiB0aGUgd2VhdGhlci1jYXJkIGJhc2VkIG9udyBoYXQgdGggZWNvbmRpdGlvbiBpc1xuICAgICAgICBjaGFuZ2VXZWF0aGVyQmFja2dyb3VuZChjb25kaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFxuXG5cblxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSG91ckJveCwgXG4gICAgICAgIGdldENvcnJlY3RJY29uLCBcbiAgICAgICAgZGVsZXRlRm9yZWNhc3RCb3hlcywgXG4gICAgICAgIGNoYW5nZUN1cnJlbnRJbmZvcm1hdGlvbixcbiAgICAgICAgY2hhbmdlV2VhdGhlckJhY2tncm91bmQgXG4gICAgfVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyB3ZWF0aGVyUmVxdWVzdCB9IGZyb20gJy4vcmVxdWVzdEFwaSc7XG5cblxuXG53ZWF0aGVyUmVxdWVzdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==