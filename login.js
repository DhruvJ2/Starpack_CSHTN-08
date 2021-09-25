
function onRegister(){
    location.replace('signup.html');
}

const form = document.querySelector("#form");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
error1.style.color = "red";
error2.style.color = "red";

form.addEventListener('submit' , (e) => {
    let usererror = "";
    let passworderror = "";
    if(username.value === "" || username.value == null){
        usererror = "Enter a username";
    }

    if(password.value.length <= 6 && password.value.length > 0){
        passworderror = "Password should be longer than 6 characters";
    }
    else if(password.value.length === 0){
        passworderror = "Enter password";
    }

    if(usererror.length > 0 || passworderror > 0){
        e.preventDefault();
        error1.innerText = usererror;
        error2.innerText = passworderror;
    }
    else if(usererror === "" && passworderror === ""){
        e.preventDefault();
        window.location.replace('index.html');
    }
});

login.addEventListener("mouseover", e =>{
    login.style.backgroundColor = "black";
    login.style.color = "white";
});
login.addEventListener("mouseleave", e =>{
    login.style.backgroundColor = "white";
    login.style.color = "black";
});

register.addEventListener("mousedown", e =>{
    onRegister();
});
register.addEventListener("mouseover", e =>{
    register.style.backgroundColor = "black";
    register.style.color = "white";
});
register.addEventListener("mouseleave", e =>{
    register.style.backgroundColor = "white";
    register.style.color = "black";
});

//authentication
