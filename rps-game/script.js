//varibel for value score
let userScore = 0;
let comScore = 0;

//varibel for ever tag in html
let UserScore_span = document.getElementById('userScore');
let ComputerScore_span = document.getElementById('computerScore');

//function to check who's the winner 
function win(userChoice, comChoice) {
  userScore++;
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
}

function lose(userChoice, comChoice) {
  comScore++;
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
}

function draw(userChoice, comChoice) {
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
}

function play(userChoice){
  const ComChoice = computerChoice(); 
  switch (userChoice + ComChoice) {
    case value:
      
      break;

    default:
      break;
  }
}



//function computer play
function computerChoice (){
  const choice = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

