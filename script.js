
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

  if(playerScore != 3 || computerScore != 3 ){
    if(computerMove === playerMove){
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
}


function computerPlay(){
    const computerChoice = ("ROCK","PAPER","SCISSORS")
    const randomMove = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomMove];
}

function updateScores() {
    document.querySelector(".scoreP").textContent = "Player Score : " + playerScore;
    document.querySelector(".scoreC").textContent = "Computer Score : " + computerScore;
  }


function endGame(){

}
  





