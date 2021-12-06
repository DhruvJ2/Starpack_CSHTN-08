const answer1 = document.querySelector("#answer11");
const answer2 = document.querySelector("#answer21");
const answer3 = document.querySelector("#answer22");
const answer4 = document.querySelector("#answer31");
const answer5 = document.querySelector("#answer41");
const answer6 = document.querySelector("#answer42");

const error = document.querySelectorAll("#error");
const submit = document.querySelector("#submit");

submit.addEventListener('click', e => {
    checkAnswers();
});

function checkAnswers(){
    if(answer1.value === "CREATE DATABASE testDB"){
        error[0].style.color = "green";
        error[0].innerText = "correct!";
    }
    else{
        error[0].style.color = "red";
        error[0].innerText = "Incorrect!";
    }

    if(answer2.value === "ALTER TABLE" && 
    answer3.value === "ADD Birthday DATE"){
        error[1].style.color = "green";
        error[1].innerText = "correct!";
    }
    else{
        error[1].style.color = "red";
        error[1].innerText = "Incorrect!";
    }

    if(answer4.value === "MAX(Price)"){
        error[2].style.color = "green";
        error[2].innerText = "correct!";
    }
    else{
        error[2].style.color = "red";
        error[2].innerText = "Incorrect!";
    }

    if(answer5.value === "UPDATE" && 
    answer6.value === "SET"){
        error[3].style.color = "green";
        error[3].innerText = "correct!";
    }
    else{
        error[3].style.color = "red";
        error[3].innerText = "Incorrect!";
    }
}