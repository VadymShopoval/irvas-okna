function modal() {
  //model
  let popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      body = document.querySelector('body'),
      bntclose = document.getElementsByTagName('strong')[1],
      bntclose0 = document.getElementsByTagName('strong')[0],
      btn = document.querySelectorAll('.popup_engineer')[0],
    popup = document.querySelector('.popup'),
    lupa = document.querySelector('.lupa');
    bg23 = document.querySelector('.bg23');

    lupa0 = document.querySelectorAll('.lupa')[0],
    popupDialog = document.querySelector('.popup_dialog'),
    imgclose = document.querySelector('.bg2'),
    div = document.createElement('div');
    div.classList.add('bg2');
    bg23.appendChild(div);
   

 
  document.body.addEventListener('click', function (e) {
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
    //lupaclass="lupa1"
   let blockID; 
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
    div.style.display ='block';
    bg23.style.display = 'block';
  }
  function noneBg() {
    div.style.background = "none";
    div.style.display = 'none';
    bg23.style.display = 'none';
  }
  //60sec
  function func() {
    popup.style.display = 'block';
  }

  setTimeout(func, 60000);
 
}
module.exports = modal;