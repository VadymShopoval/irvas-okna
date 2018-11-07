function tabsglazing() {
  let tab = document.querySelectorAll(".glazing-header-tab"),
    info = document.querySelector(".glazing-header"),
    links = document.querySelectorAll(".glazing-link"),
    imgs = document.querySelectorAll(".glazing_block > img"),
    tabContent = document.querySelectorAll(".glazing-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      links[i].classList.remove("active");
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);
  console.log('sd')
  function showTabContent(b) {
    links[b].classList.add("active");
    tabContent[b].classList.add("show");
    tabContent[b].classList.add("fade");
    tabContent[b].classList.remove("hide");
  }

  tab.forEach((link, index) => {
    link.addEventListener("click", event => {

      console.log(event.target);
      for (let i = 0; i < tab.length; i++) {
        if (
          event.target == links[i] ||
          event.target == tab[i] ||
          event.target == imgs[i]
        ) {
          hideTabContent(0);
          showTabContent(index);
          break;
        }
      }
    });
  });
}
module.exports = tabsglazing;