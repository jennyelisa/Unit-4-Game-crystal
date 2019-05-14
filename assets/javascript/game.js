// $(document).ready( function() {
var randomNumber = []; //  targetNumber this is the random number generated at the start of each game. 
var score = 0; //this will push to number-box
var crystals = []; //do i need each crystal to have its own number?
var computerGuess; //number generated
var numberOptions = [];
var winsCounter = 0;
var lossesCounter = 0;
var scoreTotal = document.getElementById("score-text");
var crystalOne = document.getElementById("crystal-one");
var crystalTwo = document.getElementById("crystal-two");
var crystalThree = document.getElementById("crystal-three");
var crystalFour = document.getElementById("crystal-four");
    this.crystalOneNum = numberOptions[0];
    this.crystalTwoNum = numberOptions[1];
    this.crystalThreeNum = numberOptions[2];
    this.crystalFourNum = numberOptions[3];



function restart() {
    var crystalOneNum = crystalOne;
    var crystalTwoNum = crystalTwo;
    var crystalThreeNum = crystalThree;
    var crystalFourNum = crystalFour;

    for (let i = 19; i <= 120; i++) {
        randomNumber.push(i);
    }
    computerGuess = randomNumber[Math.floor(Math.random() * randomNumber.length)];
    console.log(computerGuess)

    for (var j = 1; j <= 12; j++) {
        crystals.push(j);
    }

    
    for (var c = 0; c < 4; c++) {
        numberOptions[c] = crystals[Math.floor(Math.random() * crystals.length)];
    }
    console.log(numberOptions);

    score = 0;
   

    updateView();
}

function updateView() {
    var numberBox = document.getElementById("number-box");
    $(numberBox).text(computerGuess);
     $("#wins").text("Your total wins: " + winsCounter);
     $(".losses").text("Your total losses: " + lossesCounter);
     $(scoreTotal).text(score);
}


$(this).on("click", function(event) {
    // console.log(event.target);

    // console.log(target);
    

    if (event.target.id == "crystal-one") {
        score = score + numberOptions[0];
    } else if (event.target.id == "crystal-two") {
        score = score + numberOptions[1];
    } else if (event.target.id == "crystal-three") {
        score = score + numberOptions[2];
    } else if (event.target.id == "crystal-four") {
        score = score + numberOptions[3];
    }

 console.log(score) 
 
  
//   console.log(scoreTotal)
winLose();
});

function winLose() {
   
    if (score === computerGuess) {
        winsCounter = winsCounter + 1
        restart()
    } else if (score > computerGuess) {
        lossesCounter++;
        restart()
    }
    updateView();
}



// console.log(crystals);

restart();
updateView();
// function(event); 
// console.log(randomNumber);

// });