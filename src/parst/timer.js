function timer() {
  //timer
  let deadline = '2019-7-4';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      // Math.floor округля
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      //hours = Math.floor((t / (1000 * 60 * 60))),
      hours = Math.floor( (t /( 1000 * 60*60)) % 24),
      d = Math.floor((t / (1000 * 60 * 60*24)));
      console.log(d);
    return {
      'day' : d,
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      day = timer.querySelector('.day'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      day.textContent = (t.day);
      hours.textContent = ('0' + t.hours).slice(-2);
      minutes.textContent = ('0' + t.minutes).slice(-2);
      seconds.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        console.log('t.total<= 0');
        clearInterval(timeInterval);
        day.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }
  setClock('timer', deadline);
}
module.exports = timer;