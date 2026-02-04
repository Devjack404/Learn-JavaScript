//varibel for value score
let userScore = 0;
let comScore = 0;
let closeBtn;


//variabel to define type of button
let rock_button = document.getElementById('rock_btn') 
let paper_button = document.getElementById('paper_btn')
let scissors_button = document.getElementById('scissors_btn')

//variabel for every tag in html
let UserScore_span = document.getElementById('userScore');
let ComputerScore_span = document.getElementById('computerScore');
let modal = document.getElementById('modal');
let result = document.querySelector('.modal_content');


//a function to check who's the winner 
function win(userChoice, comChoice) {
  userScore++;
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
  modal.style.display= 'flex';
  result.innerHTML = 
  `<h1 class="text_win">You win!</h1> 
  <button class="closeBtn">close</button>`;
}

//function to close popup modal 
modal.addEventListener('click', function(e) {
  if(e.target == modal){
    modal.style.display = 'none';
  }
  else if (e.target.classList.contains('closeBtn')) {
    modal.style.display = 'none';
  }
});

// a function to check who's lose
function lose(userChoice, comChoice) {
  comScore++;
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
  modal.style.display= 'flex';
  result.innerHTML = 
  `<h1 class="text_win">You Lose!</h1> 
  <button class="closeBtn">close</button>`;
}

// a function to tell draw choice
function draw(userChoice, comChoice) {
  UserScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = comScore;
  modal.style.display= 'flex';
  result.innerHTML = 
  `<h1 class="text_win">Draw!</h1> 
  <button class="closeBtn">close</button>`;  
}


//a function to play game & determine the winner
function play(UserChoice){
  const ComChoice = computerChoice(); 
  switch (UserChoice + ComChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(UserChoice, ComChoice);
      console.log(`Com : ${ComChoice}, User : ${UserChoice}`)
      console.log("You Win")
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(UserChoice, ComChoice); 
      console.log(`Com : ${ComChoice}, User : ${UserChoice}`)
      console.log("You Lose")
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(UserChoice, ComChoice);
      console.log("Draw")
      break;
  }
}

// 
function doThing(){
  rock_button.addEventListener('click', function () { 
    play('rock')
  });
  paper_button.addEventListener('click', function () {
    play('paper') 
  });
  scissors_button.addEventListener('click', function () {
    play('scissors')  
  });
}



//function computer play
function computerChoice (){
  const choice = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}


doThing();
