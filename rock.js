//Rock paper scissors game
//Set up a game against the computer that the user makes a selection, and the computer randomly returns rock, paper, or scissors. Compare the results
//and determine who won. Play 5 times.
//set a user variable
let userInput = "";
//set a computer variable
let computerInput = "";
//set an array of the 3 options
let gameOptions = ["scissors", "rock" ,"paper"];
//need a user input to select one of the 3. 
//the instructions want the person to type in one of the 3 options. I think buttons are better to avoid spelling errors.
   //See the html page for the button 
function enteredChoices(selection) {
   
    userInput = selection;
   
//need the computer to randomly select one of the 3
  //math.floor/to make the value an integer/(math.random()to randomize the output and * the length of the array to only include the number of items in the array
  let random = Math.floor(Math.random()*gameOptions.length);
 //now assign this random  # to the computerInput variable so we can see what the computer picked - rock, paper, or scissors
  computerInput=gameOptions[random];

//need to compare the user input to the computer generated input
 alert (" You chose " + userInput + " and the computer chose " + computerInput );
 
 //take these results and put them into an if statement that compares them for the game. It'll be easier to do a separate 'if' section for each option
 //that the user chooses. 

 if (userInput ==="rock") {
       if (computerInput ==="rock") {
       alert("Oh no! You tied!");
       } else if (computerInput ==="paper") {
       alert("Paper covers rock. You lose!");
       } else {
       alert ("Hey! Looks like you won. Smash those sissors!");
  }

  } else if (userInput ==="paper"){
      if (computerInput ==="rock") {
      alert("You won!");
      } else if (computerInput ==="paper") {
      alert("Oh, no. Looks like a tie");
      } else {
      alert ("You just got chopped to pieces");
      }
 
  } else {
      if (computerInput ==="rock") {
      alert("You got crushed!");
      } else if (computerInput ==="paper") {
      alert("You won!");
      } else {
      alert ("Oh Oh. You guys tied");
      }
  }

}



