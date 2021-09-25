const home = document.querySelector("#home");
const logout = document.querySelector("#logout");
const settings = document.querySelector("#settings");

home.addEventListener('click', e=>{
    window.location.replace('index.html');
});
logout.addEventListener('click', e=>{
    window.location.replace('login.html');
});
settings.addEventListener('click', e=>{
    window.location.replace('settings.html');
});