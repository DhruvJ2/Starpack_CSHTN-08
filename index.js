const course = document.querySelectorAll("#course");
courseArray = [
    "html.html",
    "css.html",
    "javascript.html",
    "python.html",
    "django.html",
    "flask.html",
    "mysql.html",
    "github.html"
];
const home = document.querySelector("#home");
const account = document.querySelector("#account");
const help = document.querySelector("#help");
const aboutus = document.querySelector("#aboutus");
const books = document.querySelector("#books");

home.addEventListener('click', function(){
    window.location.replace('index.html');
});
account.addEventListener('click', function(){
    window.location.replace('account.html');
});
// help.addEventListener('click', function(){
//     window.location.replace("help.html");
// });
aboutus.addEventListener('click', function(){
    window.location.replace('aboutus.html');
});
books.addEventListener('click', function(){
    window.open('books.html');
});

for(let i=0; i<course.length; i++){
    course[i].addEventListener('click', function(){
        window.open(`${courseArray[i]}`);
    });
}


