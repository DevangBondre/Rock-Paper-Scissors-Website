
const buttons = document.querySelectorAll(".btn")
const playerChoice = document.getElementById("playerChoice")
const computerChoice = document.getElementById("computerChoice")
const result = document.getElementById("result")

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) =>{
console.log("Button click event added");
button.addEventListener('click',playRound)
});


function playRound(e){

  console.log("Play round called");
  const playerMove = this.id;
  const computerMove = computerPlay()


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
    let computerChoice = (0,1,2)
    let randomMove = Math.floor(Math.random() * computerChoice.length);
    if(randomMove === 0 ){
      return "ROCK"
    }
    else if(randomMove === 1){
      return "PAPER"
    }
    else{
      return "SCISSORS"
    }

}

function updateScores() {
    document.querySelector(".scoreP").textContent = "Player Score : " + playerScore;
    document.querySelector(".scoreC").textContent = "Computer Score : " + computerScore;
  }
  function endGame() {
    if (playerScore === 3) {
      result.textContent = "Congratulations! You won the game!";
    } else {
      result.textContent = "Oops! Computer won the game!";
    }
}

function endGame(){
  
}

