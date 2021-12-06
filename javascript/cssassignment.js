const answer1 = document.querySelector("#answer11");
const answer2 = document.querySelector("#answer21");
const answer3 = document.querySelector("#answer31");
const answer4 = document.querySelector("#answer41");

const error = document.querySelectorAll("#error");
const submit = document.querySelector("#submit");

submit.addEventListener('click', e => {
    checkAnswers();
});

function checkAnswers(){
    if(answer1.value.includes('h1') &&
    answer1.value.includes('{') && 
    answer1.value.includes('background-color:lightblue') &&
    answer1.value.includes('}')){
        error[0].style.color = "green";
        error[0].innerText = "correct!";
    }
    else{
        error[0].style.color = "red";
        error[0].innerText = "Incorrect!";
    }

    if(answer2.value.includes('div') &&
    answer2.value.includes('{') &&
    answer2.value.includes('background-color:lightblue') &&
    answer2.value.includes('width:200px') &&
    answer2.value.includes('}')){
        error[1].style.color = "green";
        error[1].innerText = "correct!";
    }
    else{
        error[1].style.color = "red";
        error[1].innerText = "Incorrect!";
    }

    if(answer3.value.includes('table, td, th') &&
    answer3.value.includes('{') && 
    answer3.value.includes('border: 1px solid black') &&
    answer3.value.includes('}')){
        error[2].style.color = "green";
        error[2].innerText = "correct!";
    }
    else{
        error[2].style.color = "red";
        error[2].innerText = "Incorrect!";
    }

    if(answer4.value.includes('p') &&
    answer4.value.includes('{') &&
    answer4.value.includes('border-style:dotted') &&
    answer4.value.includes('border-width:4px') &&
    answer4.value.includes('border-color:red') &&
    answer4.value.includes('}')){
        error[3].style.color = "green";
        error[3].innerText = "correct!";
    }
    else{
        error[3].style.color = "red";
        error[3].innerText = "Incorrect!";
    }
}