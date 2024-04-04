const RPS_ARRAY = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return RPS_ARRAY[Math.floor(Math.random() * RPS_ARRAY.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection == "rock" && computerSelection == "paper") {
        return ['You lose! Paper beats Rock.', 0, 1];
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ['You win! Rock beats scissors.', 1, 0];
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ['You win! Paper beats Rock.', 1, 0];
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ['You lose! Scissors beats Paper.', 0, 1];
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ['You lose! Rock beats Scissors.', 0, 1];
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ['You win! Scissors beats Paper.', 1, 0];
    } else {
        return ['You tied!', 0, 0];
    }
}


// Add event listeners to buttons depending on the player's choice
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
