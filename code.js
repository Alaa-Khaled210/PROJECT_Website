function store(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let firstName=document.getElementById("fist_name");
    let laststName=document.getElementById("last_name");


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


//----------------cookies---------------------//

/*
function setCookie(cname, cvalue) {
     document.cookie = cname + "=" + cvalue + ";path=.";
   }
 
   function getCookie(cname) {
     let name = cname + "=";
     let ca = document.cookie.split(';');
     for(let i = 0; i < ca.length; i++) {
       let c = ca[i];
       while (c.charAt(0) == ' ') {
         c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
       }
     }
     return "";
   }
 
   function checkCookie() {
    let user = getCookie("username");
    if (user != "") { //still login
      alert("Welcome again " + user);
    } else {//log out -->> log in
        // try to make him take the name from the text field
    //    user = prompt("Please enter your name:","");
       user = document.getElementById("email").value;

       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }


  function deleteCookie() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        alert("cookie is deleted");
    }
}*/


      //---------------------HOME------------------------------//

 let hamburger = document.querySelector('.hamburger');
  let navLinks = document.getElementById('nav-links');
 let links = document.querySelectorAll('.links');
      
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
   hamburger.classList.toggle('lines-rotate');
     });
      
 for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
     navLinks.classList.toggle('hide');
        });
      }
//---------------------scroll page with nav-----
  