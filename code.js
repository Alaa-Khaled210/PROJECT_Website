function store(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let firstName=document.getElementById("fist_name");
    let laststName=document.getElementById("last_name");

    //cookie
    let cookie_signup=document.cookie;
    cookie_signup= "email=email.value ; password= email.value " ;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(password.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0 && password.value.length == 0){
        alert('Please fill in email and password');

    }else if(password.value.length > 8){
        alert('Max of 8');

    }else if(!password.value.match(numbers)){
        alert('please add 1 number');

    }else if(!password.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!password.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', password.value);
        localStorage.setItem('fist_name',firstName.value);
        localStorage.setItem('last_name', laststName.value);
        alert('Your account has been created');
    }
}


//this checking login :)
function check(){
    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('password');

    let Login_email = document.getElementById('Login_email');
    let Login_password = document.getElementById('Login_password');
    let userRemember = document.getElementById("rememberMe");

    if(Login_email.value == storedEmail && Login_password.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}


      //---------------------HOME------------------------------//

let hamburger = document.querySelector(".hamburger");
let navLinks = document.getElementById("nav-links");
let links = document.querySelectorAll(".links");

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  hamburger.classList.toggle('lines-rotate');
});