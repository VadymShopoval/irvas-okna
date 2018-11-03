function modal() {
  //model
  let popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      body = document.querySelector('body'),
    popup = document.getElementsByClassName('popup')[0],
    popupClose = document.getElementsByClassName('popup_close')[1];
    popupClosE = document.getElementsByClassName('popup_close')[0];
  
    
  popupClose.addEventListener('click', function (e) {
    e.preventDefault();
    popupEngineer.style.display = 'none';
    document.body.style.overflow = '';
    console.log('12');
  });
  popupClosE.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'none';
    document.body.style.overflow = '';
    console.log('1');

  }); 

 
  body.addEventListener('click', function (e) {
    let target = e.target;
    e.preventDefault();
    // popup_engineer_btn
    if (target.classList.contains('popup_engineer_btn')) {
      
      popupEngineer.style.display = 'block';
      document.body.style.overflow = 'hidden';

    }
    if (target.classList.contains('popup_engineer')) {
      popupEngineer.style.display = 'none';
      document.body.style.overflow = '';
      console.log('sd');
    }
   // popup
    
    if (target.classList.contains('phone_link')) {
      document.body.style.overflow = 'hidden';
      popup.style.display = 'block';

    }
    if (target.classList.contains('popup_close')) {
      popup.style.display = 'none';
      document.body.style.overflow = '';
      console.log('123');
    }
    if (target.classList.contains('popup')) {
      popup.style.display = 'none';
      document.body.style.overflow = '';
      console.log('123');
    }
    
  });
}
module.exports = modal;