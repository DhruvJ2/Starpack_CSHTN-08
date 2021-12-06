const answer1 = document.querySelector("#answer11");
const answer2 = document.querySelector("#answer12");

const answer3 = document.querySelector("#answer21");
const answer4 = document.querySelector("#answer22");

const answer5 = document.querySelector("#answer31");

const answer6 = document.querySelector("#answer41");

const error = document.querySelectorAll("#error");
const submit = document.querySelector("#submit");

submit.addEventListener('click', e => {
    checkAnswers();
});

function checkAnswers(){
    if(answer1.value === "return" && answer2.value === "Hello"){
        error[0].style.color = "green";
        error[0].innerText = "correct!";
    }
    else{
        error[0].style.color = "red";
        error[0].innerText = "Incorrect!";
    }

    if(answer3.value === "onclick" && answer4.value === "myFunction()"){
        error[1].style.color = "green";
        error[1].innerText = "correct!";
    }
    else{
        error[1].style.color = "red";
        error[1].innerText = "Incorrect!";
    }

    if(answer5.value === "document.querySelector(\".test\").innerText" ||
        answer5.value === "document.querySelector(\".test\").innerHTML" ||
        answer5.value === "document.getElementByClassName(\"test\").innerText" ||
        answer5.value === "document.getElementByClassName(\"test\").innerHTML"){
        error[2].style.color = "green";
        error[2].innerText = "correct!";
    }
    else{
        error[2].style.color = "red";
        error[2].innerText = "Incorrect!";
    }

    if(answer6.value === "Math.random()"){
        error[3].style.color = "green";
        error[3].innerText = "correct!";
    }
    else{
        error[3].style.color = "red";
        error[3].innerText = "Incorrect!";
    }

}