const RPS_ARRAY = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return RPS_ARRAY[Math.floor(Math.random() * RPS_ARRAY.length)];
}

function playRound(playerSelection, computerSelection) {
    if (checkWinner()) {
        resetMatch();
    }

    switch (true) {
        case (playerSelection == computerSelection):
            updateScore(0, 0);
            displayResult('Tied', playerSelection, computerSelection, tie=true);
            break;
        case (playerSelection == "rock" && computerSelection == "paper"):
        case (playerSelection == "paper" && computerSelection == "scissors"):
        case (playerSelection == "scissors" && computerSelection == "rock"):
            updateScore(0, 1);
            displayResult('Lose', computerSelection, playerSelection);
            break;
        default:
            updateScore(1, 0);
            displayResult('Won', playerSelection, computerSelection);
    }
}

function displayResult(winLoseResult, winChoice, loseChoice, tie=false) {
    const result = document.querySelector('#result');
    const winner = checkWinner();
    if (tie) {
        result.textContent = `You ${winLoseResult}! The game will reset with the next choice.`;
    } else if (winner) {
        result.textContent = `${winner} wins! The game will reset with the next choice.`;
    } else {
        result.textContent = `You ${winLoseResult}! ${winChoice} beats ${loseChoice}`;
    }
}

function updateScore(playerIncrement, computerIncrement) {
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    playerScore.textContent = Number(playerScore.textContent) + playerIncrement;
    computerScore.textContent = Number(computerScore.textContent) + computerIncrement;
}

function checkWinner() {
    if (document.querySelector('#playerScore').textContent == 5) {
        return "The Player";
    } else if (document.querySelector('#computerScore').textContent == 5) {
        return "The Computer";
    } else {
        return "";
    }
}

function resetMatch() {
    const result = document.querySelector('#result');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    result.textContent = "";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

// Add event listeners to buttons depending on the player's choice
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
