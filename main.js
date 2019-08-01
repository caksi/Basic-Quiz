function check(){
const question1 = document.quiz.question1.value;
const question2 = document.quiz.question2.value;
const question3 = document.quiz.question3.value;
let correct = 0;

if (question1 == "Blue"){
    correct++;
}
if (question2 == "Red"){
    correct++;
}
if (question3 == "Honey"){
    correct++;
}

//Custom Picture Based on how well you do
const messages =["Great Job", "Not Bad", "Good Luck Next Time"];

let range;

if (correct < 1) {
    range = 2;
}
if (correct > 0 && correct < 3) {
    range = 1;
}
if (correct > 2) {
    range = 0;
}

document.getElementById("quiz-submit").style.visibility ="visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_of_correct_answer").innerHTML = "You got " + correct + " correct.";
}