function tabs() {
  let popupCalc = document.querySelector('.popup_calc');
  document.body.addEventListener('click', function (e) {
    let target = e.target;
    // 
    if (target.classList.contains('popup_calc_btn')) {
      console.log('popup_calc_btn')
      popupCalc.style.display = 'block';
    }
  })
}
module.exports = tabs;
