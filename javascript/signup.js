const submit = document.querySelector("#submit");

submit.addEventListener('click', e => {
    e.preventDefault();
    validateControls();
});

function homeRedirect(){
    window.location.replace('index.html');
}

function validateControls() {
    const name_error=document.querySelector("#name_error");
    const username_error=document.querySelector("#username_error");
    const email_error=document.querySelector("#email_error");
    const mobile_error=document.querySelector("#mobile_error");
    const password_error=document.querySelector("#password_error");
    const cpassword_error=document.querySelector("#cpassword_error");

    const name = document.querySelector("#name");
    if (name.value === ""||name.value == null) {
        name_error.innerText="Enter your name";
    }

    const username = document.querySelector("#username");
    if (username.value === ""||username.value == null) {
        username_error.innerText="Enter your username";
    }
   
    const email = document.querySelector("#email");
    if (email.value === ""||email.value == null) {
        email_error.innerText="Enter your email";
    }

    const mobile = document.querySelector("#mobile");
    if (mobile.value === ""||mobile.value == null) {
        mobile_error.innerText="Enter a valid mobile number";
    }

    const password = document.querySelector("#password");
    if (password.value === ""||password.value == null) {
        password_error.innerText="Enter valid password";
    }
    else if(password.value.length <= 6){
        password_error.innerText = "Password is too short";
    }

    const cpassword = document.querySelector("#cpassword");
    if (cpassword.value !== password.value) {
        cpassword_error.innerText="Password does not match";
    }
    else{
        homeRedirect();
    }
    
}