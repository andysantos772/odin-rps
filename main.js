const RPS_ARRAY = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return RPS_ARRAY[Math.floor(Math.random() * RPS_ARRAY.length)];
}

function playRound(playerSelection, computerSelection) {
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

function playGame() {
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt('Choose: Rock, Paper, Scissors').toLowerCase();
        let [result_str, p_score, c_score] = playRound(playerSelection, getComputerChoice());
        playerScore += p_score;
        computerScore += c_score;
        console.log(`${result_str} Current Score: ${playerScore} - ${computerScore}`)
    }

    if (playerScore == 5) {
        console.log('Player wins!');
    }
    console.log('Computer wins!');
}