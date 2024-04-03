const RPS_ARRAY = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return RPS_ARRAY[Math.floor(Math.random() * RPS_ARRAY.length)]
}
