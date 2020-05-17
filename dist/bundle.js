/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dark.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dark.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".darkTheme header {\r\n    background-color: #000000;\r\n}\r\n\r\n.darkTheme main {\r\n    background-color: #181818;\r\n}\r\n\r\n.darkTheme .vacancy_item {\r\n    background-color: #2B2C2E;\r\n}\r\n\r\n.darkTheme .vacancy_item:before {\r\n    background-color: #F35F43;\r\n}\r\n\r\n.darkTheme .tag {\r\n    background-color: #1B3C65;\r\n    color: white;\r\n}\r\n\r\n.darkTheme .dev_tag:hover {\r\n    background-color: #F35F43;\r\n}\r\n\r\n.darkTheme .city_tag:hover {\r\n    background-color: #95476E;\r\n}\r\n\r\n.darkTheme .dev_tag.active {\r\n    background-color: #F35F43;\r\n}\r\n\r\n.darkTheme .city_tag.active {\r\n    background-color: #95476E;\r\n}\r\n\r\n.darkTheme .vacancy_tag {\r\n    background-color: #1B3C65;\r\n    color: white;\r\n}\r\n\r\n.darkTheme .vacancy_info * {\r\n    color: white;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mainloader.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mainloader.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lds-spinner {\r\n    color: white;\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 80px;\r\n    height: 80px;\r\n    top: calc(50% - 40px);\r\n    left: calc(50% - 40px);\r\n  }\r\n  .lds-spinner div {\r\n    transform-origin: 40px 40px;\r\n    animation: lds-spinner 1.2s linear infinite;\r\n  }\r\n  .lds-spinner div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 37px;\r\n    width: 6px;\r\n    height: 18px;\r\n    border-radius: 20%;\r\n    background: #fff;\r\n  }\r\n  .lds-spinner div:nth-child(1) {\r\n    transform: rotate(0deg);\r\n    animation-delay: -1.1s;\r\n  }\r\n  .lds-spinner div:nth-child(2) {\r\n    transform: rotate(30deg);\r\n    animation-delay: -1s;\r\n  }\r\n  .lds-spinner div:nth-child(3) {\r\n    transform: rotate(60deg);\r\n    animation-delay: -0.9s;\r\n  }\r\n  .lds-spinner div:nth-child(4) {\r\n    transform: rotate(90deg);\r\n    animation-delay: -0.8s;\r\n  }\r\n  .lds-spinner div:nth-child(5) {\r\n    transform: rotate(120deg);\r\n    animation-delay: -0.7s;\r\n  }\r\n  .lds-spinner div:nth-child(6) {\r\n    transform: rotate(150deg);\r\n    animation-delay: -0.6s;\r\n  }\r\n  .lds-spinner div:nth-child(7) {\r\n    transform: rotate(180deg);\r\n    animation-delay: -0.5s;\r\n  }\r\n  .lds-spinner div:nth-child(8) {\r\n    transform: rotate(210deg);\r\n    animation-delay: -0.4s;\r\n  }\r\n  .lds-spinner div:nth-child(9) {\r\n    transform: rotate(240deg);\r\n    animation-delay: -0.3s;\r\n  }\r\n  .lds-spinner div:nth-child(10) {\r\n    transform: rotate(270deg);\r\n    animation-delay: -0.2s;\r\n  }\r\n  .lds-spinner div:nth-child(11) {\r\n    transform: rotate(300deg);\r\n    animation-delay: -0.1s;\r\n  }\r\n  .lds-spinner div:nth-child(12) {\r\n    transform: rotate(330deg);\r\n    animation-delay: 0s;\r\n  }\r\n  @keyframes lds-spinner {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  line-height: 1;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\n\nblockquote:before,\nblockquote:after {\n  content: '';\n  content: none;\n}\n\n\nq:before,\nq:after  {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea,\nbutton {\n  outline: none;\n  color: inherit;\n  font: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\n* {\n  border: none;\n  background: none;\n  text-decoration: none;\n  padding:0;\n  margin:0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  cursor: default;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body * {\r\n    font-family: 'Ubuntu Condensed', sans-serif;\r\n}\r\n\r\n.preloader {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #F0FAFB;\r\n    display: none;\r\n}\r\n\r\n#loader {\r\n    margin-top: 40px;\r\n}\r\n\r\n.show {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    padding: 40px 0;\r\n    background-color: #64BABB;\r\n}\r\n\r\n.themes_switcher {\r\n    display: inline-block;\r\n    height: 20px;\r\n    width: 44px;\r\n    background-color: white;\r\n    border-radius: 35px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: calc(50% - 22px);\r\n    transition: all .4s ease-in-out;\r\n}\r\n\r\n.themes_switcher:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.circle {\r\n    display: inline-block;\r\n    height: 12px;\r\n    width: 12px;\r\n    box-shadow:0 3px 3px rgba(0,0,0,.2),0 0 0 2px #dddddd;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: calc(50% - 6px);\r\n    left: 3px;\r\n    background-color: white;\r\n}\r\n\r\n.themesSwitcherDark .circle {\r\n    left: calc(100% - 16px);\r\n}\r\n\r\n.themesSwitcherDark {\r\n    background-color: #F35F43;\r\n}\r\n\r\n.filter_field {\r\n    height: 50px;\r\n    width: 90%;\r\n    background-color: #fff;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 20px;\r\n    color: #64BABB;\r\n    font-weight: 700;\r\n    text-decoration: underline;\r\n    font-size: 15px;\r\n    margin: 0 auto 20px;\r\n}\r\n\r\n.clear_filters_button {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    color: #F0FAFB;\r\n    width: 150px;\r\n}\r\n\r\n.clear_filters_button:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n.tags_field {\r\n    margin: 0 auto;\r\n}\r\n\r\n.dev_tags {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 800px;\r\n    margin: 0 auto 30px;\r\n}\r\n\r\n.tag {\r\n    padding: 5px 5px;\r\n    background-color: #F0FAFB;\r\n    margin: 5px 5px;\r\n    border-radius: 5px;\r\n    min-width: 10%;\r\n    text-align: center;\r\n    color: #64BABB;\r\n    transition: background .3s;\r\n}\r\n\r\n.dev_tag.active {\r\n    background-color: rgb(226, 238, 158);\r\n    color: #F0FAFB;\r\n}\r\n\r\n.city_tag.active {\r\n    background-color: rgb(100, 187, 143);\r\n    color: #F0FAFB;\r\n}\r\n\r\n.dev_tag:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(226, 238, 158);\r\n    color: #F0FAFB;\r\n}\r\n\r\n.city_tag:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(100, 187, 143);\r\n    color: #F0FAFB;\r\n}\r\n\r\nmain {\r\n    background-color: #F0FAFB;\r\n    min-height: 100vh;\r\n    padding: 20px 0;\r\n    position: relative;\r\n}\r\n\r\n.no_result {\r\n    font-size: 25px;\r\n    text-align: center;\r\n    color: #64BABB;\r\n}\r\n\r\n.wrapper {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 30px;\r\n    position: relative;\r\n}\r\n\r\n.vacancy_item {\r\n    border-radius: 8px;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 20px 30px;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.vacancy_item:before {\r\n    content: '';\r\n    display: inline-block;\r\n    height: 100%;\r\n    width: 5px;\r\n    background-color: #64BABB;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.vacancy_info_block {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.vacancy_title {\r\n    margin: 10px 0;\r\n}\r\n\r\n.vacancy_info_block:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.vacancy_logo {\r\n    border-radius: 50%;\r\n    background: center/contain no-repeat;\r\n    height: 100px;\r\n    width: 100px;\r\n    margin-right: 30px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.vacancy_company_name {\r\n    color: #5BA5A6;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n}\r\n\r\n.vacancy_title {\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    color: #2E3B3B;\r\n}\r\n\r\n.vacancy_description {\r\n    display: flex;\r\n}\r\n\r\n.vacancy_description * {\r\n    margin-right: 40px;\r\n    color: rgb(158, 158, 158);\r\n    position: relative;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\n\r\n.vacancy_description *:after {\r\n    content: '';\r\n    display: inline-block;\r\n    height: 4px;\r\n    width: 4px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: calc(50% - 4px);\r\n    right: -22px;\r\n    background-color: rgb(158, 158, 158);\r\n}\r\n\r\n.vacancy_area::after {\r\n    display: none;\r\n}\r\n\r\n.vacancy_tags {\r\n    display: flex;\r\n}\r\n\r\n.vacancy_tag {\r\n    padding: 7px 20px 5px;\r\n    background-color: #F0FAFB;\r\n    color: #64BABB;\r\n    font-weight: 600;\r\n    border-radius: 4px;\r\n}\r\n\r\n.vacancy_tag:nth-child(2) {\r\n    margin: 0 20px;\r\n}\r\n\r\n.pages_counter {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding: 20px 0;\r\n}\r\n\r\n.pageNumber {\r\n    margin: 0 5px;\r\n    color: #2E3B3B;\r\n    font-size: 20px;\r\n}\r\n\r\n.pageNumber:hover {\r\n    cursor: pointer;\r\n    color: #64BABB;\r\n}\r\n\r\n.main_preloader {\r\n    position: fixed;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: #64BABB;\r\n    z-index: 1000;\r\n}\r\n\r\n@media (max-width: 871px) {\r\n    .vacancy_item {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .vacancy_info_block {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mainloader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainloader.css */ "./src/mainloader.css");
/* harmony import */ var _mainloader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mainloader_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark.css */ "./src/dark.css");
/* harmony import */ var _dark_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dark_css__WEBPACK_IMPORTED_MODULE_3__);







const vacancyTemplate = document.querySelector('#vacancy_item_template').innerHTML;
const vacanciesList = document.querySelector('.vacancies_list');
const tagsField = document.querySelector('.tags_field');
const tagsArea = document.querySelectorAll('.city_tag');
const tagsLanguage = document.querySelectorAll('.dev_tag');
const clearButton = document.querySelector('.clear_filters_button');
const tag = document.querySelectorAll('.tag');
const mainPreloader = document.querySelector('.main_preloader');
const themesSwitcher = document.querySelector('.themes_switcher');
const body = document.querySelector('body');

tagsField.addEventListener('click', onTagsFieldClick);
clearButton.addEventListener('click', onClearButtonClick);
themesSwitcher.addEventListener('click', onToggleThemesClick);

let vacanciesData = [];
let filterLanguageTags;
let filterAreaTags;


init();

function init() {
    fetch('https://api.hh.ru/vacancies?text=developer&area=5&per_page=100')
    .then(resp => resp.json())
    .then(createVacanciesList)

    function createVacanciesList(data) {
        vacanciesData = data;
        console.log(vacanciesData)

        renderVacanciesList(vacanciesData['items']);
        mainPreloader.remove();
    }
}

function onToggleThemesClick() {
    themesSwitcher.classList.toggle('themesSwitcherDark');
    body.classList.toggle('darkTheme');
}

function onClearButtonClick() {
    filterLanguageTags = '';
    filterAreaTags = '';
    [...tag].forEach(el => el.classList.remove('active'))
    renderVacanciesList(vacanciesData['items']);
}

function onTagsFieldClick(e) {
    if(e.target.classList.contains('tag')) {
        onTagClick(e);
    }
}

function onTagClick(e) {
    if (e.target.classList.contains('dev_tag')) {
        filterLanguageTags = e.target.innerHTML;
        clearTag(tagsLanguage);
        tagToActive(e);
    }else if (e.target.classList.contains('city_tag')) {
        filterAreaTags = e.target.innerHTML;
        clearTag(tagsArea);
        tagToActive(e);
    }

    filterVacancies();
}

function tagToActive(e) {
    e.target.classList.toggle('active');
}

function clearTag(tagGroup) {
    [...tagGroup].forEach(el => {
    if(el.classList.contains('active')) {
        el.classList.remove('active');
    }
})
}

function filterVacancies() {
    let filteredVacancies;

    if (!filterLanguageTags) {
        filteredVacancies = vacanciesData['items']
            .filter(el => el['tagsArea'] === filterAreaTags);
    } else if (!filterAreaTags) {
        filteredVacancies = vacanciesData['items']
        .filter(el => el['tagsLanguage'] === filterLanguageTags);
    } else {
        filteredVacancies = vacanciesData['items']
        .filter(el => el['tagsLanguage'] === filterLanguageTags && el['tagsArea'] === filterAreaTags);
    }

    if(filteredVacancies == '') {
        vacanciesList.innerHTML = '<h2 class="no_result">К сожалению, результатов нет :(</h2>';
    } else {  
        renderVacanciesList(filteredVacancies);
    }
}

function renderVacanciesList(data) {
    const vacancyHTML = data.map(createVacancyHTML).join('\n');
    vacanciesList.innerHTML = vacancyHTML;
}

function createVacancyHTML(el) {
    return (vacancyTemplate
            .replace('{{logo}}', validLogo(el))
            .replace('{{data-id}}', el.id)
            .replace('{{company_name}}', el.employer.name)
            .replace('{{vacancy_title}}', el.name)
            .replace('{{vacancy_date}}', validDate(el))
            .replace('{{vacancy_salary}}', validSalary(el))
            .replace('{{vacancy_area}}', el.area['name'])
            .replace('{{tag_language}}', determineTagLanguage(el))
            .replace('{{tag_area}}', determineTagArea(el, ))
            )
}

function validSalary(el) {
    if (el.salary !== null) {
        return 'от ' + el.salary['from'] + ' ' + el.salary['currency']
    } else return 'Not specified'
}

function validDate(el) {
    const date = new Date(el.created_at);
    const day = date.getDate();
    const month = String(date.getMonth()).length == 1 ? '0' + date.getMonth() : date.getMonth();
    return day + '.' + month;
}

function validLogo(el) {
    if (el['employer']['logo_urls'] !== null) {
        return el['employer']['logo_urls']['original']
    } else return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
}

function determineTagLanguage(el) {
    const language = 
        [
            'Python', 'Java ',
            'C++', 'C#', 
            '.NET', 'JavaScript',
            'Unity', 'React',
            'Vue', 'Full-Stack',
            'PHP', 'Web'
        ];
    
    const languageItem = language.find(elem => el['name'].includes(elem)) || 'Другие специальности';
    el['tagsLanguage'] = languageItem;
    return languageItem;
}

function determineTagArea(el) {
    const area = 
        [
            'Киев', 'Харьков',
            'Днепр', 'Винница', 
            'Львов', 'Запорожье',
            'Одесса', 'Донецк'
        ];

    const areaItem = area.find(elem => el.area['name'].includes(elem)) || 'Другие города';
    el['tagsArea'] = areaItem;
    return areaItem;
}



/***/ }),

/***/ "./src/dark.css":
/*!**********************!*\
  !*** ./src/dark.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./dark.css */ "./node_modules/css-loader/dist/cjs.js!./src/dark.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/mainloader.css":
/*!****************************!*\
  !*** ./src/mainloader.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./mainloader.css */ "./node_modules/css-loader/dist/cjs.js!./src/mainloader.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhcmsuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWlubG9hZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGFyay5jc3M/ZDZhZCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbmxvYWRlci5jc3M/NTBmMiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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QUU3Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kYXJrVGhlbWUgaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSBtYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSAudmFjYW5jeV9pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMkMyRTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSAudmFjYW5jeV9pdGVtOmJlZm9yZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzVGNDM7XFxyXFxufVxcclxcblxcclxcbi5kYXJrVGhlbWUgLnRhZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjNDNjU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSAuZGV2X3RhZzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzVGNDM7XFxyXFxufVxcclxcblxcclxcbi5kYXJrVGhlbWUgLmNpdHlfdGFnOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1NDc2RTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSAuZGV2X3RhZy5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM1RjQzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFya1RoZW1lIC5jaXR5X3RhZy5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU0NzZFO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFya1RoZW1lIC52YWNhbmN5X3RhZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjNDNjU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmtUaGVtZSAudmFjYW5jeV9pbmZvICoge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxkcy1zcGlubmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDQwcHgpO1xcclxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdiB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBsZHMtc3Bpbm5lciAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gIC5sZHMtc3Bpbm5lciBkaXY6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogM3B4O1xcclxcbiAgICBsZWZ0OiAzN3B4O1xcclxcbiAgICB3aWR0aDogNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XFxyXFxuICB9XFxyXFxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XFxyXFxuICB9XFxyXFxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcXHJcXG4gIH1cXHJcXG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNSkge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNikge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNykge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoOCkge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoOSkge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xcclxcbiAgfVxcclxcbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTApIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcXHJcXG4gIH1cXHJcXG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDExKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XFxyXFxuICB9XFxyXFxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMikge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsZHMtc3Bpbm5lciB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcblxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIgIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6MDtcXG4gIG1hcmdpbjowO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wcmVsb2FkZXIge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEZBRkI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNsb2FkZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NEJBQkI7XFxyXFxufVxcclxcblxcclxcbi50aGVtZXNfc3dpdGNoZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMnB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lc19zd2l0Y2hlcjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgYm94LXNoYWRvdzowIDNweCAzcHggcmdiYSgwLDAsMCwuMiksMCAwIDAgMnB4ICNkZGRkZGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IGNhbGMoNTAlIC0gNnB4KTtcXHJcXG4gICAgbGVmdDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lc1N3aXRjaGVyRGFyayAuY2lyY2xlIHtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTZweCk7XFxyXFxufVxcclxcblxcclxcbi50aGVtZXNTd2l0Y2hlckRhcmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM1RjQzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyX2ZpZWxkIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICBjb2xvcjogIzY0QkFCQjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyX2ZpbHRlcnNfYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNGMEZBRkI7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyX2ZpbHRlcnNfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhZ3NfZmllbGQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRldl90YWdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZyB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEZBRkI7XFxyXFxuICAgIG1hcmdpbjogNXB4IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzY0QkFCQjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XFxyXFxufVxcclxcblxcclxcbi5kZXZfdGFnLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzOCwgMTU4KTtcXHJcXG4gICAgY29sb3I6ICNGMEZBRkI7XFxyXFxufVxcclxcblxcclxcbi5jaXR5X3RhZy5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxODcsIDE0Myk7XFxyXFxuICAgIGNvbG9yOiAjRjBGQUZCO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV2X3RhZzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjM4LCAxNTgpO1xcclxcbiAgICBjb2xvcjogI0YwRkFGQjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHlfdGFnOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxODcsIDE0Myk7XFxyXFxuICAgIGNvbG9yOiAjRjBGQUZCO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkFGQjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9fcmVzdWx0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjNjRCQUJCO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi52YWNhbmN5X2l0ZW0ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW5jeV9pdGVtOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0QkFCQjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW5jeV9pbmZvX2Jsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhY2FuY3lfdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZhY2FuY3lfaW5mb19ibG9jazpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZhY2FuY3lfbG9nbyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi52YWNhbmN5X2NvbXBhbnlfbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjNUJBNUE2O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi52YWNhbmN5X3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzJFM0IzQjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhY2FuY3lfZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW5jeV9kZXNjcmlwdGlvbiAqIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnZhY2FuY3lfZGVzY3JpcHRpb24gKjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICB3aWR0aDogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XFxyXFxuICAgIHJpZ2h0OiAtMjJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW5jeV9hcmVhOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi52YWNhbmN5X3RhZ3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udmFjYW5jeV90YWcge1xcclxcbiAgICBwYWRkaW5nOiA3cHggMjBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEZBRkI7XFxyXFxuICAgIGNvbG9yOiAjNjRCQUJCO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi52YWNhbmN5X3RhZzpudGgtY2hpbGQoMikge1xcclxcbiAgICBtYXJnaW46IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzX2NvdW50ZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5wYWdlTnVtYmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgY29sb3I6ICMyRTNCM0I7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VOdW1iZXI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjNjRCQUJCO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9wcmVsb2FkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0QkFCQjtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MXB4KSB7XFxyXFxuICAgIC52YWNhbmN5X2l0ZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnZhY2FuY3lfaW5mb19ibG9jayB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vbWFpbmxvYWRlci5jc3MnO1xyXG5pbXBvcnQgJy4vZGFyay5jc3MnO1xyXG5cclxuY29uc3QgdmFjYW5jeVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZhY2FuY3lfaXRlbV90ZW1wbGF0ZScpLmlubmVySFRNTDtcclxuY29uc3QgdmFjYW5jaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YWNhbmNpZXNfbGlzdCcpO1xyXG5jb25zdCB0YWdzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFnc19maWVsZCcpO1xyXG5jb25zdCB0YWdzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXR5X3RhZycpO1xyXG5jb25zdCB0YWdzTGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV2X3RhZycpO1xyXG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcl9maWx0ZXJzX2J1dHRvbicpO1xyXG5jb25zdCB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFnJyk7XHJcbmNvbnN0IG1haW5QcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9wcmVsb2FkZXInKTtcclxuY29uc3QgdGhlbWVzU3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWVzX3N3aXRjaGVyJyk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG50YWdzRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRhZ3NGaWVsZENsaWNrKTtcclxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsZWFyQnV0dG9uQ2xpY2spO1xyXG50aGVtZXNTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uVG9nZ2xlVGhlbWVzQ2xpY2spO1xyXG5cclxubGV0IHZhY2FuY2llc0RhdGEgPSBbXTtcclxubGV0IGZpbHRlckxhbmd1YWdlVGFncztcclxubGV0IGZpbHRlckFyZWFUYWdzO1xyXG5cclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuaGgucnUvdmFjYW5jaWVzP3RleHQ9ZGV2ZWxvcGVyJmFyZWE9NSZwZXJfcGFnZT0xMDAnKVxyXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuICAgIC50aGVuKGNyZWF0ZVZhY2FuY2llc0xpc3QpXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVmFjYW5jaWVzTGlzdChkYXRhKSB7XHJcbiAgICAgICAgdmFjYW5jaWVzRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFjYW5jaWVzRGF0YSlcclxuXHJcbiAgICAgICAgcmVuZGVyVmFjYW5jaWVzTGlzdCh2YWNhbmNpZXNEYXRhWydpdGVtcyddKTtcclxuICAgICAgICBtYWluUHJlbG9hZGVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblRvZ2dsZVRoZW1lc0NsaWNrKCkge1xyXG4gICAgdGhlbWVzU3dpdGNoZXIuY2xhc3NMaXN0LnRvZ2dsZSgndGhlbWVzU3dpdGNoZXJEYXJrJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmtUaGVtZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNsZWFyQnV0dG9uQ2xpY2soKSB7XHJcbiAgICBmaWx0ZXJMYW5ndWFnZVRhZ3MgPSAnJztcclxuICAgIGZpbHRlckFyZWFUYWdzID0gJyc7XHJcbiAgICBbLi4udGFnXS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICAgcmVuZGVyVmFjYW5jaWVzTGlzdCh2YWNhbmNpZXNEYXRhWydpdGVtcyddKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UYWdzRmllbGRDbGljayhlKSB7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhZycpKSB7XHJcbiAgICAgICAgb25UYWdDbGljayhlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25UYWdDbGljayhlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXZfdGFnJykpIHtcclxuICAgICAgICBmaWx0ZXJMYW5ndWFnZVRhZ3MgPSBlLnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgY2xlYXJUYWcodGFnc0xhbmd1YWdlKTtcclxuICAgICAgICB0YWdUb0FjdGl2ZShlKTtcclxuICAgIH1lbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NpdHlfdGFnJykpIHtcclxuICAgICAgICBmaWx0ZXJBcmVhVGFncyA9IGUudGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICBjbGVhclRhZyh0YWdzQXJlYSk7XHJcbiAgICAgICAgdGFnVG9BY3RpdmUoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyVmFjYW5jaWVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhZ1RvQWN0aXZlKGUpIHtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclRhZyh0YWdHcm91cCkge1xyXG4gICAgWy4uLnRhZ0dyb3VwXS5mb3JFYWNoKGVsID0+IHtcclxuICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxufSlcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyVmFjYW5jaWVzKCkge1xyXG4gICAgbGV0IGZpbHRlcmVkVmFjYW5jaWVzO1xyXG5cclxuICAgIGlmICghZmlsdGVyTGFuZ3VhZ2VUYWdzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRWYWNhbmNpZXMgPSB2YWNhbmNpZXNEYXRhWydpdGVtcyddXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZWwgPT4gZWxbJ3RhZ3NBcmVhJ10gPT09IGZpbHRlckFyZWFUYWdzKTtcclxuICAgIH0gZWxzZSBpZiAoIWZpbHRlckFyZWFUYWdzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRWYWNhbmNpZXMgPSB2YWNhbmNpZXNEYXRhWydpdGVtcyddXHJcbiAgICAgICAgLmZpbHRlcihlbCA9PiBlbFsndGFnc0xhbmd1YWdlJ10gPT09IGZpbHRlckxhbmd1YWdlVGFncyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlcmVkVmFjYW5jaWVzID0gdmFjYW5jaWVzRGF0YVsnaXRlbXMnXVxyXG4gICAgICAgIC5maWx0ZXIoZWwgPT4gZWxbJ3RhZ3NMYW5ndWFnZSddID09PSBmaWx0ZXJMYW5ndWFnZVRhZ3MgJiYgZWxbJ3RhZ3NBcmVhJ10gPT09IGZpbHRlckFyZWFUYWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmaWx0ZXJlZFZhY2FuY2llcyA9PSAnJykge1xyXG4gICAgICAgIHZhY2FuY2llc0xpc3QuaW5uZXJIVE1MID0gJzxoMiBjbGFzcz1cIm5vX3Jlc3VsdFwiPtCaINGB0L7QttCw0LvQtdC90LjRjiwg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiDQvdC10YIgOig8L2gyPic7XHJcbiAgICB9IGVsc2UgeyAgXHJcbiAgICAgICAgcmVuZGVyVmFjYW5jaWVzTGlzdChmaWx0ZXJlZFZhY2FuY2llcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclZhY2FuY2llc0xpc3QoZGF0YSkge1xyXG4gICAgY29uc3QgdmFjYW5jeUhUTUwgPSBkYXRhLm1hcChjcmVhdGVWYWNhbmN5SFRNTCkuam9pbignXFxuJyk7XHJcbiAgICB2YWNhbmNpZXNMaXN0LmlubmVySFRNTCA9IHZhY2FuY3lIVE1MO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWYWNhbmN5SFRNTChlbCkge1xyXG4gICAgcmV0dXJuICh2YWNhbmN5VGVtcGxhdGVcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7bG9nb319JywgdmFsaWRMb2dvKGVsKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7ZGF0YS1pZH19JywgZWwuaWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7e2NvbXBhbnlfbmFtZX19JywgZWwuZW1wbG95ZXIubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7dmFjYW5jeV90aXRsZX19JywgZWwubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7dmFjYW5jeV9kYXRlfX0nLCB2YWxpZERhdGUoZWwpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgne3t2YWNhbmN5X3NhbGFyeX19JywgdmFsaWRTYWxhcnkoZWwpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgne3t2YWNhbmN5X2FyZWF9fScsIGVsLmFyZWFbJ25hbWUnXSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7dGFnX2xhbmd1YWdlfX0nLCBkZXRlcm1pbmVUYWdMYW5ndWFnZShlbCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7e3RhZ19hcmVhfX0nLCBkZXRlcm1pbmVUYWdBcmVhKGVsLCApKVxyXG4gICAgICAgICAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkU2FsYXJ5KGVsKSB7XHJcbiAgICBpZiAoZWwuc2FsYXJ5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICfQvtGCICcgKyBlbC5zYWxhcnlbJ2Zyb20nXSArICcgJyArIGVsLnNhbGFyeVsnY3VycmVuY3knXVxyXG4gICAgfSBlbHNlIHJldHVybiAnTm90IHNwZWNpZmllZCdcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWREYXRlKGVsKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZWwuY3JlYXRlZF9hdCk7XHJcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSkubGVuZ3RoID09IDEgPyAnMCcgKyBkYXRlLmdldE1vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICByZXR1cm4gZGF5ICsgJy4nICsgbW9udGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkTG9nbyhlbCkge1xyXG4gICAgaWYgKGVsWydlbXBsb3llciddWydsb2dvX3VybHMnXSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBlbFsnZW1wbG95ZXInXVsnbG9nb191cmxzJ11bJ29yaWdpbmFsJ11cclxuICAgIH0gZWxzZSByZXR1cm4gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYS9hYy9Ob19pbWFnZV9hdmFpbGFibGUuc3ZnLzEyMDBweC1Ob19pbWFnZV9hdmFpbGFibGUuc3ZnLnBuZydcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZXJtaW5lVGFnTGFuZ3VhZ2UoZWwpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnUHl0aG9uJywgJ0phdmEgJyxcclxuICAgICAgICAgICAgJ0MrKycsICdDIycsIFxyXG4gICAgICAgICAgICAnLk5FVCcsICdKYXZhU2NyaXB0JyxcclxuICAgICAgICAgICAgJ1VuaXR5JywgJ1JlYWN0JyxcclxuICAgICAgICAgICAgJ1Z1ZScsICdGdWxsLVN0YWNrJyxcclxuICAgICAgICAgICAgJ1BIUCcsICdXZWInXHJcbiAgICAgICAgXTtcclxuICAgIFxyXG4gICAgY29uc3QgbGFuZ3VhZ2VJdGVtID0gbGFuZ3VhZ2UuZmluZChlbGVtID0+IGVsWyduYW1lJ10uaW5jbHVkZXMoZWxlbSkpIHx8ICfQlNGA0YPQs9C40LUg0YHQv9C10YbQuNCw0LvRjNC90L7RgdGC0LgnO1xyXG4gICAgZWxbJ3RhZ3NMYW5ndWFnZSddID0gbGFuZ3VhZ2VJdGVtO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlSXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZXJtaW5lVGFnQXJlYShlbCkge1xyXG4gICAgY29uc3QgYXJlYSA9IFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ9Ca0LjQtdCyJywgJ9Cl0LDRgNGM0LrQvtCyJyxcclxuICAgICAgICAgICAgJ9CU0L3QtdC/0YAnLCAn0JLQuNC90L3QuNGG0LAnLCBcclxuICAgICAgICAgICAgJ9Cb0YzQstC+0LInLCAn0JfQsNC/0L7RgNC+0LbRjNC1JyxcclxuICAgICAgICAgICAgJ9Ce0LTQtdGB0YHQsCcsICfQlNC+0L3QtdGG0LonXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICBjb25zdCBhcmVhSXRlbSA9IGFyZWEuZmluZChlbGVtID0+IGVsLmFyZWFbJ25hbWUnXS5pbmNsdWRlcyhlbGVtKSkgfHwgJ9CU0YDRg9Cz0LjQtSDQs9C+0YDQvtC00LAnO1xyXG4gICAgZWxbJ3RhZ3NBcmVhJ10gPSBhcmVhSXRlbTtcclxuICAgIHJldHVybiBhcmVhSXRlbTtcclxufVxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhcmsuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbmxvYWRlci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=