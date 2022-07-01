// hover in btn 
let btn = document.querySelector('.mouse-cursor-gradient-tracking, .mouse-cursor-1, .mouse-cursor-2');
btn.addEventListener('mousemove', mouse => {
  let rect = mouse.target.getBoundingClientRect();
  let x = mouse.clientX - rect.left;
  let y = mouse.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});

// validation for form
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()


// function to eye icon
function myFunction() {
  var x = document.getElementById("typePasswordX");
  var y = document.getElementById("color");
  if (x.type === "password") {
    x.type = "text";
    y.style.color = "#00cb6d";
  } else {
    x.type = "password";
    y.style.color = "#00a9cb";
  }
}
function myFunction1() {
  var x = document.getElementById("typePasswordX1");
  var z = document.getElementById("color1");
  if (x.type === "password") {
    x.type = "text";
    z.style.color = "#00cb6d";
  } else {
    x.type = "password";
    z.style.color = "#00a9cb";
  }
}
// check confirm password
var password = document.getElementById("typePasswordX")
  , confirm_password = document.getElementById("typePasswordX1");
function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// document.getElementById('typeNumberX').type = 'number';

// check is number of phone is numeric only
function isInputNumber(ev){
  var char = String.fromCharCode(ev.which);
  if(!(/[0-9]/.test(char))){
      ev.preventDefault();
  } 
}



// pattern="^[-+.\w]{1,64}@[gmail]{1,64}\.[-.\w]{3}$"