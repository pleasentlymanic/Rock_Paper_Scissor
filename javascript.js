function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return "rock";
    }else if(random == 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playGround(playerSelection,computerSelection){
    computerSelection == getComputerChoice();
    let userGuess = playerSelection.toLowerCase();
    if(userGuess == computerSelection){
        return "Tie!";
    }
    if(userGuess == "rock" && computerSelection == "scissors"){
        return "The users Rock beats the Scissors!";
    }
    if(userGuess == "scissors" && computerSelection == "paper"){
        return "The users Scissors beats Paper!";
    }
    if(userGuess == "paper" && computerSelection == "rock"){
        return "The users Papers covers the Rock!";
    }else{

        return "The computer choose " + computerSelection + " so you lose";
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playGround(playerSelection,computerSelection));