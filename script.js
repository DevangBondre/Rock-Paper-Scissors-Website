function getComputerChoice(){
    let computerChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomComputerChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomComputerChoice]; 
}

function gameRound(){

    let playerRoundWin = 0;
    let computerRoundWin = 0;

    while(playerRoundWin < 3 && computerRoundWin < 3){
        let playerSelection = prompt("Please enter your choice - Rock, Paper, or Scissors ");
        let playerSelectionCaseIS = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();

        console.log("The computer picked " + computerSelection);

        if(playerSelectionCaseIS === computerSelection){
            console.log("It's a tie");
        }
        else if (
            (playerSelectionCaseIS === "ROCK" && computerSelection === "SCISSORS") ||
            (playerSelectionCaseIS === "PAPER" && computerSelection === "ROCK") ||
            (playerSelectionCaseIS === "SCISSORS" && computerSelection === "PAPER")
        ){
            playerRoundWin++;
            console.log("Congratulations! You won this round");
        }
        else {
            computerRoundWin++;
            console.log("Sorry, you lost this round! Computer won!");
        }
    }   

    if(playerRoundWin === 3){
        return "Congratulations You won 3 rounds first ! You won the game!";
    } else {
        return "Sorry, Computer made it to 3 rounds win first ! Computer won!";
    }
}

const result = gameRound();
console.log(result);
