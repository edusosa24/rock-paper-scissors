function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const max = 2;

    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector("results");
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

function game(playerPlay) {
    let roundWinner = playRound(playerPlay, computerPlay());

    if (roundWinner > 0) {
        playerWins++;
    } else if (roundWinner < 0) {
        cpuWins++;
    }

    if(playerWins == 5 || cpuWins == 5){
        results.remove();
        const finalResult = document.createElement("h1");
        if (playerWins == 5) {        
            finalResult.textContent = "You won!";
        }else if (cpuWins == 5) {
            finalResult.textContent = "You lost!";
      }

      showResults.appendChild(finalResult);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerWins = 0;
let cpuWins = 0;

const showResults = document.querySelector(".show-results")
const results = document.createElement("results");
results.classList.add(".results")
showResults.appendChild(results);

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));


