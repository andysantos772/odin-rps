const RPS_ARRAY = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return RPS_ARRAY[Math.floor(Math.random() * RPS_ARRAY.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "paper") {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return 'You win! Rock beats scissors';
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return 'You win! Scissors beats Paper';
    } else {
        return 'You tied!';
    }
}
