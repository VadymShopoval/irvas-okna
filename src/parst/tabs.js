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
  let clickLink = document.querySelectorAll('.no_click_link'),
    decorSlider = document.querySelectorAll('.decoration_slider'),
        //tabContent = document.querySelectorAll('.decoration_content >.row > .glazing_cold'),
        tabContent =document.querySelectorAll('.tabConten2'),
        internalLink = document.querySelectorAll('.decoration_item > div > a'),
        noСlick = document.getElementsByClassName('no_click'),
        noClickA = document.querySelectorAll('.no_click > a'),
        atest = document.querySelectorAll('.atest');
        
        function hideContent(a, listBlok, click) {
          for (let i = a; i < listBlok.length; i++) {
            listBlok[i].classList.remove('show');
            listBlok[i].classList.add('hide');
            click[i].classList.remove('after_click');
            
          
            //internal_link
          }
        }

        hideContent(1, tabContent, noСlick);

        function showContent(b, listBlok, click) {
          if (listBlok[b].classList.contains('hide')) {
            listBlok[b].classList.remove('hide');
            listBlok[b].classList.add('show');
            click[b].classList.add('after_click');
            console.log(click[b]);
            
          }
        }

        


    document.body.addEventListener('click', function (e) {
      let target = e.target;
       for (let i = 0; i < noСlick.length; i++) {

         if (target == noСlick[i] || target == atest[i]) {

           hideContent(0, tabContent, noСlick);
           showContent(i, tabContent, noСlick);
           break;
         }
       }
      //(target && target.classList.contains('decoration_item') || target.parentNode.classList.contains('decoration_item')
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
      if (target.classList.contains('internal_link') || target.classList.contains('internal_link1')) {
        hideContent(0, tabContent, noСlick);
        showContent(0, tabContent, noСlick);
      }
      if (target.classList.contains('external_link') || (target.classList.contains('external_link'))) {
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
      }



      //ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ
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
  function hideGlaz(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        noСlick[i].classList.remove('after_click');

        //internal_link
      }
    }

    //hideGlazt(1);

  function showGlaz(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        noСlick[b].classList.add('after_click');

      }
    }
    
}
module.exports = tabs;