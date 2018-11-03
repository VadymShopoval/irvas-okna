function tabs() {
  let tab = document.querySelectorAll('.glazing_slider'),
    info = document.querySelector('.glazing_block'),
    tabContent = document.querySelectorAll('.glazing_cold');
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      console.log(tabContent[i]);
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      console.log(tabContent[b]);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');

    }
  }
  info.addEventListener('click', function(event){
    let target =event.target;
    console.log(target);
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        console.log(tab);
        if (target == tab[i]) {
          console.log(tab[i]);
          console.log(target);
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}
module.exports = tabs;