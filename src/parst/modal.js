function modal() {
  //model
  let popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      body = document.querySelector('body'),
      bntclose = document.getElementsByTagName('strong')[1],
      bntclose0 = document.getElementsByTagName('strong')[0],
      btn = document.querySelectorAll('.popup_engineer')[0],
    popup = document.querySelector('.popup');
    popupDialog = document.querySelector('.popup_dialog');
    
  
   console.log('123');
  console.log(popup);

 
  body.addEventListener('click', function (e) {
    let target = e.target;
    
    // popup_engineer_btn
    if (target.classList.contains('popup_engineer_btn')) {
      
      popupEngineer.style.display = 'block';
      document.body.style.overflow = 'hidden';

    }
    if (target.classList.contains('popup_engineer')) {
      popupEngineer.style.display = 'none';
      document.body.style.overflow = '';
      
    }
   // popup
    
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
    if (target == bntclose0 || (target == bntclose)) {
      console.log(bntclose);
      popup.style.display = 'none';
      document.body.style.overflow = '';
      btn.style.display = "none";
    
    }
    
  });
  //60sec
  function func() {
    popup.style.display = 'block';
  }

  setTimeout(func, 60000);
 
}
module.exports = modal;