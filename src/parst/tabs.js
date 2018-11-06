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
        noСlick = document.getElementsByClassName('no_click');
        
        function hideContent(a) {
          for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            noСlick[i].classList.remove('after_click');
          }
        }

        hideContent(1);

        function showContent(b) {
          if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            noСlick[b].classList.add('after_click');
          }
        }

        


    document.body.addEventListener('click', function (e) {
      let target = e.target;
      if (target && target.classList.contains('decoration_item') || target.parentNode.classList.contains('decoration_item')) {
        
    
        for (let i = 0; i < noСlick.length; i++) {

          if (target == noСlick[i]) {

            hideContent(0);
            showContent(i);
            break;
          }
        }
      }
    });
    
}
module.exports = tabs;