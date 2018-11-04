function form() {
  

  let form1 = document.getElementById('form1'),
    form2 = document.getElementById('form2'),
    form3 = document.getElementById('form3'),
    form4 = document.getElementById('form4'),
    form5 = document.getElementById('form5'),
    form6 = document.getElementById('form6'),
    form7 = document.getElementById('form7'),
    form8 = document.getElementById('form8'),
    form9 = document.getElementById('form9'),
   
    
    inputName = document.getElementsByName('user_name'),
    
    inputPhone = document.getElementsByName('user_phone');
    
  
    /* inputPhone.addEventListener('input', () => {
      for (let i = 0; i < inputPhone.length; i++) {
        
        inputPhone[i].value = inputPhone[i].value.replace(/[^0-9+]/ig, '');
      }
    }); */
    
 
  let sendRequest = function (target) {

    let message = {
        loading: "Загрузка....",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
      },
      statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    let input = target.getElementsByTagName('input'),
      request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(target),
      obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);
    request.send(json);
    target.appendChild(statusMessage);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    };

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  };

  let body = document.querySelector('body');
  body.addEventListener('input', function (e) {
    let target = e.target;
    if (target.classList.contains('Phone')) {
      //console.log('inputPhone');
      target.value = target.value.replace(/[^0-9+]/ig, '');
    }
  })
  body.addEventListener('submit', e => {
    
    e.preventDefault();
    let target = e.target;

    if (target.id == 'form1' || (target.id == 'form3') || (target.id == 'form2') || (target.id == 'form4') || (target.id == 'form5') || (target.id == 'form6') || (target.id == 'form7') || (target.id == 'form8')||(target.id == 'form9')) {
      console.log('ss');
      
      sendRequest(target);
    }
   
  });
}
module.exports = form;