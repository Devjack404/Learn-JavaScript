//varibel for value score
let userScore = 0;
let comScore = 0;

//variabel to define type of button
let rock_button = document.getElementById('rock_btn') 
let paper_button = document.getElementById('paper_btn')
let scissors_button = document.getElementById('scissors_btn')

//variabel for ever tag in html
let UserScore_span = document.getElementById('userScore');
let ComputerScore_span = document.getElementById('computerScore');

//a function to check who's the winner 
function win(userChoice, comChoice) {
  userScore++;
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
}

// a function to check who's lose
function lose(userChoice, comChoice) {
  comScore++;
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
}

// a function to tell draw choice
function draw(userChoice, comChoice) {
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
}


//a function to play game & determine the winner
function play(UserChoice){
  const ComChoice = computerChoice(); 
  switch (UserChoice + ComChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(UserChoice, ComChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(UserChoice, ComChoice); 
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(UserChoice, ComChoice) 
      break;
  }
}

// 
function doThing(){
  rock_button.addEventListener('click', function () {
    play('rock')
    console.log('User choose rock')
  });
  paper_button.addEventListener('click', function () {
    play('paper') 
    console.log('User choose paper')
  });
  scissors_button.addEventListener('click', function () {
    play('scissors')  
    console.log('User choose scissors')
  });
}



//function computer play
function computerChoice (){
  const choice = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}


doThing();
