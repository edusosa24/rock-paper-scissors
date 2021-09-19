function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const max = 2;

    return choice[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    const choice = prompt("Enter rock, paper or scissors:");
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector(".results");
    const result = document.createElement("li");

    if(playerSelection == computerSelection){
        result.textContent = "It's a tie!";
        results.appendChild(result);
        return 0;
    }

    
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result.textContent = "You win! Rock beats Scissors!";
            results.appendChild(result);
            return 1;
        } else {
            result.textContent = "You lose! Paper beats Rock";
            results.appendChild(result);
            return -1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "You win! Paper beats Rock!";
            results.appendChild(result);
            return 1;
        } else {
            result.textContent = "You lose! Scissors beats Paper";
            results.appendChild(result);
            return -1;
        }
    } else {
        if (computerSelection == "paper") {
            result.textContent = "You win! Scissors beats Paper!";
            results.appendChild(result);
            return 1;
        } else {
            result.textContent = "You lose! Rock beats Scissors!";
            results.appendChild(result);
            return -1;
        }
    }
}

function game() {
    let playerWins = 0;
    let cpuWins = 0;

    let roundWinner = playRound(playerPlay(), computerPlay());

    if (roundWinner > 0) {
        playerWins++;
    } else if (roundWinner < 0) {
        cpuWins++;
    }


    if (playerWins > cpuWins) {
        console.log("You won with a %i - %i score", playerWins, cpuWins);
    } else if (playerWins < cpuWins) {
        console.log("You lost with a %i - %i score", playerWins, cpuWins);
    } else {
        console.log("You tie with a %i - %i score", playerWins, cpuWins);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () =>  playRound("rock", computerPlay()));
paper.addEventListener("click", () =>  playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));


