
const buttons = document.querySelectorAll(".btn")
const playerChoice = document.getElementById("playerChoice")
const computerChoice = document.getElementById("computerChoice")
const result = document.getElementById("result")
const popup = document.getElementById("playAgainPopup")
const popupText = document.getElementById("popupText");
const openModalButtons =document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) =>{
console.log("Button click event added");
button.addEventListener('click',playRound)
});


function playRound(e){

  console.log("Play round called");
  const playerMove = this.id;
  const computerMove = computerPlay();
  

  console.log("Player move:", playerMove);
  console.log("Computer move:", computerMove);

  
    if((computerMove === "ROCK" && playerMove === "rock") ||
    (computerMove === "PAPER" && playerMove === "paper") ||
    (computerMove === "SCISSORS" && playerMove === "scissors"))
    {
        playerChoice.textContent = "You picked : " + playerMove.toUpperCase(); 
        computerChoice.textContent = "You picked : " + computerMove 
        result.textContent = "Its a Tie ! "

    }
    else if((playerMove === "rock") && (computerMove === "SCISSORS") ||
    (playerMove === "paper") && (computerMove === "ROCK")||
    (playerMove === "scissors" && (computerMove === "PAPER")) 
    ){
        playerChoice.textContent = "You picked : " + playerMove.toUpperCase();
        computerChoice.textContent = "You picked : " + computerMove 
        result.textContent = "Congratulations You Won The Round ! "
        playerScore++;
        
    }

    else if((computerMove === "ROCK") && (playerMove === "scissors") ||
    (computerMove === "PAPER") && (playerMove === "rock") ||
    (computerMove === "SCISSORS") && (playerMove === "paper")
    ){
        playerChoice.textContent = "You picked : " + playerMove.toUpperCase();
        computerChoice.textContent ="You picked : " + computerMove 
        result.textContent = "Sorry You Lost The Round ! "
        computerScore++;
        
    }
    updateScores();
    if (playerScore === 3 || computerScore === 3) {
      endGame();
    }
  }



function computerPlay(){
    
    let computerChoice = Math.floor(Math.random() * 3) +1 ;
   
    switch(computerChoice){
      case 1:
      computer = "ROCK"
      break
      case 2:
      computer = "PAPER"
      break
      case 3:
      computer = "SCISSORS"
      break
    }
     return computer;
}

function updateScores() {
    document.querySelector(".scoreP").textContent = "Player Score : " + playerScore;
    document.querySelector(".scoreC").textContent = "Computer Score : " + computerScore;
  }


function endGame(){
  buttons.forEach(button => button.disabled = true);
  let endMessage = (playerScore === 3) ? "Congratulations! You won!" : "Sorry! You lost!";

  result.innerHTML = '<div>' + endMessage + '</div><button id="playAgain" style ="font-size:1em; border:2px solid black;background-color: #ccc; color: #333; border-radius:15px">Play Again</button>';
  
  document.getElementById("playAgain").addEventListener("click", resetGame);
}
  
function resetGame(){
  playerScore = 0;
  computerScore = 0;
  updateScores();
  buttons.forEach(button => button.disabled = false); 
  playerChoice.textContent = "You picked : ?";
  computerChoice.textContent = "Computer picked : ?";
  result.textContent = "";
}





