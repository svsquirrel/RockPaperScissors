//Rock paper scissors
let computerScore = 0;
let userScore     = 0;
const buttons = document.querySelectorAll('button');
const results = document.getElementById("outcome");

function computerPlay() {
    let items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random() * items.length)]
}


buttons.forEach((button) => {
button.addEventListener('click',() =>{

  uInput =  button.id
  
  playGame(uInput,computerPlay()), updateScore(), gameOver()

});
});


function playGame(uInput, cInput) {
   
   
    if (uInput === cInput) {
        results.innerHTML = "You tied!";
    }else if (uInput === 'rock' && cInput === 'paper'){
        results.innerHTML = "You lost! You chose rock and the computer chose paper!";
        computerScore++;
    }else if (uInput === 'rock' && cInput === 'scissors'){
        results.innerHTML = "Your rock crushed his scissors!";
        userScore++;
    }else if ( uInput === 'paper' && cInput === 'scissors'){
        results.innerHTML = "You lost! You got chopped by his scissors";
        computerScore++;
    } else if (uInput === 'paper' && cInput === 'rock') {
        results.innerHTML = "You covered him!";
        userScore++;
    } else if (uInput === 'scissors' && cInput === 'paper') {
        results.innerHTML = "You cut him up!";
        userScore++;
    } else if (uInput === 'scissors' && cInput === 'rock') {
        results.innerHTML = "You lost that round!";
        computerScore++;
    }  
}      
   
function updateScore() {
    document.getElementById("score").innerHTML = `${userScore} - ${computerScore}`;
}

function gameOver() {
    if (userScore === 5){
        results.innerHTML = "You won the game!";
        computerScore = 0
        userScore = 0
    } else if (computerScore ===5){
        results.innerHTML === "You lost. Try again!"
        computerScore = 0
        userScore = 0
            
    }
}    
  
    


    
   
 
    

  







