//window.addEventListener('load')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let modal = require("./parst/modal.js"),
      form = require("./parst/form.js"),
      timer = require("./parst/timer.js"),
      calc = require("./parst/calc.js"),
      tabs = require("./parst/tabs.js");
      //tabsglazing = require('./parst/tabsglazing.js');
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
  calc();
  //tabsglazing();
 
    
 
});
