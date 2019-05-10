var randomNumber = []; // this is the random number generated at the start of each game. 
var score; //this will push to number-box
var crystals; //do i need each crystal to have its own number?
var computerGuess= //number generated

function reset() {
    randomNumber = score[Math.floor(Math.random() * letterPool.length)];
    console.log(score);
}

$(document).ready(function(event) {

for (randomNumber = 19; randomNumber < 120; randomNumber++){
    $(randomNumber).push(".random-number");
}




});
