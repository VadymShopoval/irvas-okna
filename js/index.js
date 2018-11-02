//window.addEventListener('load')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  //model
  let popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      body = document.querySelector('body'),
    popup = document.getElementsByClassName('popup')[0],
    popupClose = document.getElementsByClassName('popup_close')[1];
  
    
  popupClose.addEventListener('click', function (e) {
    e.preventDefault();
    popupEngineer.style.display = 'none';
    
  });
  popup.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'none';

  });
      
  body.addEventListener('click', function (e) {
    let target = e.target;
    e.preventDefault();
    // popup_engineer_btn
    if (target.classList.contains('popup_engineer_btn')) {
      
      popupEngineer.style.display = 'block';

    }
    if (target.classList.contains('popup_engineer')) {
      popupEngineer.style.display = 'none';
     
    }
   // popup
    
    if (target.classList.contains('phone_link')) {

      popup.style.display = 'block';

    }
    if (target.classList.contains('popup_close')) {
      popup.style.display = 'none';

    }
    if (target.classList.contains('phone_link')) {
      
    }
  });
    
 
});
