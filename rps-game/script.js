let UserScore = document.querySelector('.userScore');
let computerScore = document.querySelector('.computerScore');
let userChoice;
  
function choice (userChoice){
 if(userChoice === "Rock") {
    console.log("User memilih rock")
 }
 else if (userChoice === "Paper") {
    console.log("User memilih paper")
 }
 else if(userChoice === "Scissors") {
    console.log("User memilih scissors")
 }
  return userChoice;
}




