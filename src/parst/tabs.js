function tabs() {
  let tab = document.querySelectorAll('.glazing_slider'),
    info = document.querySelector('.glazing_block'),
    tabContent = document.querySelectorAll('.glazing_cold');
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      console.log(tabContent[i]);
      tabContent[i].style.display = "none";
      
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
  
  document.body.addEventListener('click', function (e) {
    let target = e.target;

    //
    if (target.classList.contains('external_link')) {
      console.log('tab');
      showTabContent(2);
       
    }
    if(target.classList.contains('internal_link')) {
      console.log('tab1');
      showTabContent(3);
      
    
      
    } 
  })
}
module.exports = tabs;