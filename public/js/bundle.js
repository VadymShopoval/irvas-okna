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
      form = __webpack_require__(/*! ./parst/form.js */ "./parst/form.js"),
      timer = __webpack_require__(/*! ./parst/timer.js */ "./parst/timer.js"),
      calc = __webpack_require__(/*! ./parst/calc.js */ "./parst/calc.js"),
      tabs = __webpack_require__(/*! ./parst/tabs.js */ "./parst/tabs.js"); //tabsglazing = require('./parst/tabsglazing.js');

  /* 
  slider = require("./parst/slider.js"),
  
  timer  = require("./parst/timer.js"),
  calc   = require("./parst/calc.js"); */

  /* form();
  
  slider();
  
  
  calc();  */


  form();
  modal();
  timer();
  tabs();
  calc(); //tabsglazing();
});

/***/ }),

/***/ "./parst/calc.js":
/*!***********************!*\
  !*** ./parst/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var priceButtons = document.querySelectorAll(".popup_calc_btn"),
      calc = document.querySelector(".popup_calc"),
      calcProfile = document.querySelector(".popup_calc_profile"),
      calcEnd = document.querySelector(".popup_calc_end"),
      calcNextBtn = document.querySelector(".popup_calc_button"),
      calcProfileNextBtn = document.querySelector(".popup_calc_profile_button"),
      close = document.querySelectorAll(".popup_calc_close"),
      popups = [calc, calcProfile, calcEnd],
      balconIcons = document.querySelectorAll(".balcon_icons > a > img"),
      balconBig = document.querySelectorAll(".big_img > img"),
      coldBox = document.querySelector(".cold"),
      warmBox = document.querySelector(".warm"),
      form = document.querySelector(".form_calc"),
      formData = new FormData(),
      statusMessage = document.createElement("div"),
      message = {
    loading: "Loading...",
    success: "Мы скоро с вами свяжемся!",
    failure: "Произошла ошибка"
  };
  priceButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log('price btn');
      calc.style.display = "block";
    });
  });
  close.forEach(function (x) {
    x.addEventListener("click", function () {
      popups.forEach(function (item) {
        setTimeout(function () {
          item.style.display = "none";
        }, 980);
        clearInputs();
      });
    });
  });
  balconIcons.forEach(function (icon, index) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      balconIcons.forEach(function (icon) {
        icon.style.width = "20%";
        icon.classList.remove("choosen");
      });
      balconBig.forEach(function (img) {
        img.style.display = "none";
      });
      event.target.style.width = "30%";
      event.target.classList.add("choosen");
      balconBig[index].style.display = "inline-block";
    });
  });
  calcNextBtn.addEventListener("click", function () {
    var width = document.querySelector("#width").value,
        height = document.querySelector("#height").value,
        type = document.querySelector(".choosen");

    if (width == "" || height == "" || type == null || width == "0" || height == "0") {
      alert("Введите высоту и ширину, выбирите форму балкона");
    } else {
      formData.append("form", type.alt);
      formData.append("width", width);
      formData.append("height", height);
      calc.style.display = "none";
      calcProfile.style.display = "block";
    }
  });
  coldBox.addEventListener("click", function () {
    warmBox.checked = false;
  });
  warmBox.addEventListener("click", function () {
    coldBox.checked = false;
  });
  calcProfileNextBtn.addEventListener("click", function () {
    var viewType = document.querySelector("#view_type").value;

    if (!warmBox.checked && !coldBox.checked) {
      alert("Выберите тип профиля для рассчета.");
    } else {
      if (coldBox.checked) {
        formData.append("profile_type", "cold");
      } else {
        formData.append("profile_type", "warm");
      }

      formData.append("view_type", viewType);
      calcProfile.style.display = "none";
      calcEnd.style.display = "block";
    }
  });

  function clearInputs() {
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
      input.value = "";
    });
    formData = new FormData();
    setTimeout(function () {
      statusMessage.innerHTML = "";
    }, 10000);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.querySelector("#calc_user_name").value,
        phone = document.querySelector("#calc_phone").value;
    formData.append("name", name);
    formData.append("phone", phone);
    form.appendChild(statusMessage);

    function postData(data) {
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              resolve();
            }
          } else {
            reject();
          }
        };

        request.send(data);
      });
    }

    postData(formData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInputs);
  });
}

module.exports = calc;

/***/ }),

/***/ "./parst/form.js":
/*!***********************!*\
  !*** ./parst/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  var form1 = document.getElementById('form1'),
      form2 = document.getElementById('form2'),
      form3 = document.getElementById('form3'),
      form4 = document.getElementById('form4'),
      form5 = document.getElementById('form5'),
      form6 = document.getElementById('form6'),
      form7 = document.getElementById('form7'),
      form8 = document.getElementById('form8'),
      form9 = document.getElementById('form9'),
      inputName = document.getElementsByName('user_name'),
      inputPhone = document.getElementsByName('user_phone');
  /* inputPhone.addEventListener('input', () => {
    for (let i = 0; i < inputPhone.length; i++) {
      
      inputPhone[i].value = inputPhone[i].value.replace(/[^0-9+]/ig, '');
    }
  }); */

  var sendRequest = function sendRequest(target) {
    var message = {
      loading: "Загрузка....",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так..."
    },
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    var input = target.getElementsByTagName('input'),
        request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var formData = new FormData(target),
        obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    var json = JSON.stringify(obj);
    request.send(json);
    target.appendChild(statusMessage);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  };

  var body = document.querySelector('body');
  body.addEventListener('input', function (e) {
    var target = e.target;

    if (target.classList.contains('Phone')) {
      //console.log('inputPhone');
      target.value = target.value.replace(/[^0-9+]/ig, '');
    }
  });
  body.addEventListener('submit', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target.id == 'form1' || target.id == 'form3' || target.id == 'form2' || target.id == 'form4' || target.id == 'form5' || target.id == 'form6' || target.id == 'form7' || target.id == 'form8' || target.id == 'form9') {
      console.log('ss');
      sendRequest(target);
    }
  });
}

module.exports = form;

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
      bntclose = document.getElementsByTagName('strong')[1],
      bntclose0 = document.getElementsByTagName('strong')[0],
      btn = document.querySelectorAll('.popup_engineer')[0],
      popup = document.querySelector('.popup'),
      lupa = document.querySelector('.lupa');
  bg23 = document.querySelector('.bg23');
  lupa0 = document.querySelectorAll('.lupa')[0], popupDialog = document.querySelector('.popup_dialog'), imgclose = document.querySelector('.bg2'), div = document.createElement('div');
  div.classList.add('bg2');
  bg23.appendChild(div);
  document.body.addEventListener('click', function (e) {
    var target = e.target; // popup_engineer_btn

    if (target.classList.contains('popup_engineer_btn')) {
      popupEngineer.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    if (target.classList.contains('popup_engineer')) {
      popupEngineer.style.display = 'none';
      document.body.style.overflow = '';
    } // popup


    if (target.classList.contains('phone_link')) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      popup.style.display = 'block';
    }

    if (target.classList.contains('popup')) {
      popup.style.display = 'none';
      document.body.style.overflow = '';
      popupEngineer.style.display = 'none';
    }

    if (target == bntclose0 || target == bntclose) {
      console.log(bntclose);
      popup.style.display = 'none';
      document.body.style.overflow = '';
      btn.style.display = "none";
    } //lupaclass="lupa1"


    var blockID;

    if (target.classList.contains('lupa1')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
      /*  blockID =target.getAttribute('src');
       addBg(blockID);
       console.log(blockID);
       div.style.cssText = ` background: url(${blockID})`;
       console.log(div); */

      addBg();
    }

    if (target.classList.contains('lupa1')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
      /*  blockID =target.getAttribute('src');
       addBg(blockID);
       console.log(blockID);
       div.style.cssText = ` background: url(${blockID})`;
       console.log(div); */

      addBg();
    }

    if (target.classList.contains('cl0')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
      /*  blockID =target.getAttribute('src');
       addBg(blockID);
       console.log(blockID);
       div.style.cssText = ` background: url(${blockID})`;
       console.log(div); */

      addBg();
    }

    if (target.classList.contains('cl0')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl1')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/2.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl2')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/3.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl3')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/4.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl4')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/5.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl5')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/6.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl6')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/7.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('cl7')) {
      e.preventDefault();
      console.log('lupa');
      div.style.background = "url(img/our_works/big_img/8.png) no-repeat";
      addBg();
    }

    if (target.classList.contains('bg23') || target.classList.contains('bg2')) {
      noneBg();
    }
  });

  function addBg() {
    // 
    div.style.display = 'block';
    bg23.style.display = 'block';
  }

  function noneBg() {
    div.style.background = "none";
    div.style.display = 'none';
    bg23.style.display = 'none';
  } //60sec


  function func() {
    popup.style.display = 'block';
  }

  setTimeout(func, 60000);
}

module.exports = modal;

/***/ }),

/***/ "./parst/tabs.js":
/*!***********************!*\
  !*** ./parst/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  /* let tab = document.querySelectorAll('.internal_link'),
    info = document.querySelector('.decoration_slider'),
    tabContent = document.querySelectorAll('.glazing_cold');
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  //hideTabContent(1);
  function showTabContent(b) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }
  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('internal_link')) {
      console.log(target);
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
   */
  var clickLink = document.querySelectorAll('.no_click_link'),
      decorSlider = document.querySelectorAll('.decoration_slider'),
      //tabContent = document.querySelectorAll('.decoration_content >.row > .glazing_cold'),
  tabContent = document.querySelectorAll('.tabConten2'),
      internalLink = document.querySelectorAll('.decoration_item > div > a'),
      noСlick = document.getElementsByClassName('no_click'),
      noClickA = document.querySelectorAll('.no_click > a'),
      atest = document.querySelectorAll('.atest');

  function hideContent(a, listBlok, click) {
    for (var i = a; i < listBlok.length; i++) {
      listBlok[i].classList.remove('show');
      listBlok[i].classList.add('hide');
      click[i].classList.remove('after_click');
      click[i].classList.remove('active'); //internal_link
    }
  }

  hideContent(1, tabContent, noСlick);

  function showContent(b, listBlok, click) {
    if (listBlok[b].classList.contains('hide')) {
      listBlok[b].classList.remove('hide');
      listBlok[b].classList.add('show');
      click[b].classList.add('after_click');
      click[b].classList.add('active');
      console.log(click[b]);
    }
  }

  var glazTab = document.querySelectorAll('.glazing_block'),
      glazLink = document.querySelectorAll('.link-tab'),
      glazContent = document.querySelectorAll('.tabConten1');

  function hideGlaz(h) {
    for (var i = h; i < glazContent.length; i++) {
      glazContent[i].classList.remove('show');
      glazContent[i].classList.add('hide');
      glazLink[i].classList.remove('active');
    }
  } //hideGlaz(1);


  function showGlaz(s) {
    if (glazContent[s].classList.contains('hide')) {
      glazContent[s].classList.remove('hide');
      glazContent[s].classList.add('show');
      glazLink[s].classList.add('active');
    }
  }

  hideContent(1, glazContent, glazLink);
  document.body.addEventListener('click', function (e) {
    var target = e.target;

    for (var i = 0; i < noСlick.length; i++) {
      if (target == noСlick[i] || target == atest[i]) {
        hideContent(0, tabContent, noСlick);
        showContent(i, tabContent, noСlick);
        break;
      }
    } //(target && target.classList.contains('decoration_item') || target.parentNode.classList.contains('decoration_item')

    /*       if (target && target.classList.contains('decoration_item') || target.parentNode.classList.contains('decoration_item') ) {
            
            console.log('ok1');
            for (let i = 0; i < noСlick.length; i++) {
              if (target == noСlick[i] ||  ) {
                hideContent(0);
                showContent(i);
                break;
              }
            }
          }
          } */


    if (target.classList.contains('internal_link')) {
      hideContent(0, tabContent, noСlick);
      showContent(0, tabContent, noСlick);
    }

    if (target.classList.contains('external_link')) {
      hideContent(0, tabContent, noСlick);
      showContent(1, tabContent, noСlick);
    }

    if (target.classList.contains('rising_link')) {
      hideContent(0, tabContent, noСlick);
      showContent(2, tabContent, noСlick);
    }

    if (target.classList.contains('roof_link')) {
      hideContent(0, tabContent, noСlick);
      showContent(3, tabContent, noСlick);
    } //ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ


    if (target.classList.contains('tree_link')) {
      console.log('s');
      hideContent(0, glazContent, glazLink);
      showContent(0, glazContent, glazLink);
    }

    if (target.classList.contains('aluminum_link')) {
      hideContent(0, glazContent, glazLink);
      showContent(1, glazContent, glazLink);
    }

    if (target.classList.contains('plastic_link')) {
      hideContent(0, glazContent, glazLink);
      showContent(2, glazContent, glazLink);
    }

    if (target.classList.contains('french_link')) {
      hideContent(0, glazContent, glazLink);
      showContent(3, glazContent, glazLink);
    }

    if (target.classList.contains('rise_link')) {
      hideContent(0, glazContent, glazLink);
      showContent(4, glazContent, glazLink);
    }
    /* if (target && target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block') || target.classList.contains('atest')) {
      console.log('ok')
     /*  for (let i = 0; i < glazTab.length; i++) {
        if (target == glazTab[i] || target.parentNode == glazTab[i]) {
          hideGlaz(0);
          showGlaz(i);
          break;
        }
      } */
    //} */

  });
}

module.exports = tabs;

/***/ }),

/***/ "./parst/timer.js":
/*!************************!*\
  !*** ./parst/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  //timer
  var deadline = '2018-11-07';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        // Math.floor округля
    seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        //hours = Math.floor((t / (1000 * 60 * 60))),
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
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