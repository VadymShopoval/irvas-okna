//window.addEventListener('load')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  //model
  let popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      body = document.querySelector('body'),
    popupEngineerBtn = document.getElementsByClassName('popup_engineer_btn'),
    popupClose = document.getElementsByClassName('popup_close')[1];
  
    
  popupClose.addEventListener('click', function (e) {
    popupEngineer.style.display = 'none';
    console.log('sdsd');
  });
      
  body.addEventListener('click', function (e) {
    let target = e.target;
    
    if (target.classList.contains('popup_engineer_btn')) {
      
      popupEngineer.style.display = 'block';

    }
    
    if (target.classList.contains('popup_engineer')) {
      popupEngineer.style.display = 'none';
     
    }
   
  });
    
 
});
