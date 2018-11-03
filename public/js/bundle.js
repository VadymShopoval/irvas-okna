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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//window.addEventListener('load')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var modal = __webpack_require__(/*! ./parst/modal.js */ "./parst/modal.js"),
      timer = __webpack_require__(/*! ./parst/timer.js */ "./parst/timer.js"); //tabs = require("./parst/tabs.js");

  /* form  = require("./parst/form.js"),
  slider = require("./parst/slider.js"),
  
  timer  = require("./parst/timer.js"),
  calc   = require("./parst/calc.js"); */

  /* form();
  
  slider();
  
  
  calc();  */
  //form();


  modal();
  timer(); //tabs();
});

/***/ }),

/***/ "./parst/modal.js":
/*!************************!*\
  !*** ./parst/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  //model
  var popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      body = document.querySelector('body'),
      popup = document.getElementsByClassName('popup')[0],
      popupClose = document.getElementsByClassName('popup_close')[1];
  popupClosE = document.getElementsByClassName('popup_close')[0];
  popupClose.addEventListener('click', function (e) {
    e.preventDefault();
    popupEngineer.style.display = 'none';
    document.body.style.overflow = '';
  });
  popupClosE.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'none';
    document.body.style.overflow = '';
  });
  body.addEventListener('click', function (e) {
    var target = e.target;
    e.preventDefault(); // popup_engineer_btn

    if (target.classList.contains('popup_engineer_btn')) {
      popupEngineer.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    if (target.classList.contains('popup_engineer')) {
      popupEngineer.style.display = 'none';
      document.body.style.overflow = '';
    } // popup


    if (target.classList.contains('phone_link')) {
      document.body.style.overflow = 'hidden';
      popup.style.display = 'block';
    }

    if (target.classList.contains('popup_close')) {
      popup.style.display = 'none';
      document.body.style.overflow = '';
    }

    if (target.classList.contains('popup')) {
      popup.style.display = 'none';
      document.body.style.overflow = '';
    }
  }); //60sec

  function func() {
    popup.style.display = 'block';
  }

  setTimeout(func, 60000);
}

module.exports = modal;

/***/ }),

/***/ "./parst/timer.js":
/*!************************!*\
  !*** ./parst/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  //timer
  var deadline = '2019-07-04';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        // Math.floor округля
    seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60)),
        //  hour = Math.floor((t / 1000 / 60/60) % 24),
    d = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'day': d,
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        day = timer.querySelector('.day'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      day.textContent = ('0' + t.day).slice(-2);
      hours.textContent = ('0' + t.hours).slice(-2);
      minutes.textContent = ('0' + t.minutes).slice(-2);
      seconds.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        console.log('t.total<= 0');
        clearInterval(timeInterval);
        day.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map