const answer1 = document.querySelector("#answer11");
const answer2 = document.querySelector("#answer12");
const answer3 = document.querySelector("#answer13");

const answer4 = document.querySelector("#answer21");
const answer5 = document.querySelector("#answer22");

const answer6 = document.querySelector("#answer31");

const answer7 = document.querySelector("#answer41");

const error = document.querySelectorAll("#error");
const submit = document.querySelector("#submit");

submit.addEventListener('click', e => {
    checkAnswers();
});

function checkAnswers(){
    if(answer1.value === "<a" && 
    answer2.value === "href=\"default.html\"" && 
    answer3.value === "</a>"){
        error[0].style.color = "green";
        error[0].innerText = "correct!";
    }
    else{
        error[0].style.color = "red";
        error[0].innerText = "Incorrect!";
    }

    if(answer4.value === "select name=\"cars\"" && 
    answer5.value === "select"){
        error[1].style.color = "green";
        error[1].innerText = "correct!";
    }
    else{
        error[1].style.color = "red";
        error[1].innerText = "Incorrect!";
    }

    if(answer6.value === "color=\"red\""){
        error[2].style.color = "green";
        error[2].innerText = "correct!";
    }
    else{
        error[2].style.color = "red";
        error[2].innerText = "Incorrect!";
    }

    if(answer6.value === "input type=\"text\" name=\"username\""){
        error[3].style.color = "green";
        error[3].innerText = "correct!";
    }
    else{
        error[3].style.color = "red";
        error[3].innerText = "Incorrect!";
    }
}