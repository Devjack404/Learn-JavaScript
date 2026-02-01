let UserScore = document.querySelector('.userScore');
let computerScore = document.querySelector('.computerScore');
let userChoice;
  
function Choice (userChoice){
 if(userChoice === "Rock") {
    console.log("User memilih rock")
 }
 else if (userChoice === "Paper") {
    console.log("User memilih paper")
 }
 else if(userChoice === "Scissors") {
    console.log("User memilih scissors")
 }
}


//function computer play
function computerChoice (){
  const choice = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}


