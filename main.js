function check(){
const question1 = document.quiz.question1.value;
const question2 = document.quiz.question2.value;
const question3 = document.quiz.question3.value;
let correct = 0 ;

if (question1 == "Blue"){
    correct++;
}
if (question2 == "Red"){
    correct++;
}
if (question3 == "Honey"){
    correct++;
}

document.getElementById("quiz-submit").style.visibility="visible";
}