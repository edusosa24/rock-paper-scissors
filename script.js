function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const max = 2;

    return choice[Math.floor(Math.random() * 3)];
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

function restart(){
    playerWins = 0;
    cpuWins = 0;
    const finalResult = document.querySelector(".final-result");
    finalResult.remove();
    const playAgain = document.querySelector(".play-again");
    playAgain.remove();
    const results = document.createElement("ul");
    results.classList.add("results");
    showResults.appendChild(results);    
    score.textContent = "0 - 0";
}


function game(playerPlay) {
    let roundWinner = playRound(playerPlay, computerPlay());

    if (roundWinner > 0) {
        playerWins++;
    } else if (roundWinner < 0) {
        cpuWins++;
    }

    score.textContent = playerWins + " - " + cpuWins;

    if(playerWins == 5 || cpuWins == 5){
        const results = document.querySelector(".results");
        results.remove();
        const finalResult = document.createElement("h1");
        finalResult.classList.add("final-result");
        const playAgain = document.createElement("button");
        playAgain.classList.add("play-again");

        if (playerWins == 5) {        
            finalResult.textContent = "You won!";
        }else if (cpuWins == 5) {
            finalResult.textContent = "You lost!";
      }

      showResults.appendChild(finalResult);
      showResults.appendChild(playAgain);

      playAgain.addEventListener("click", () => restart());
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerWins = 0;
let cpuWins = 0;

const showResults = document.querySelector(".show-results");
const score = document.createElement("p");
score.textContent = playerWins + " - " + cpuWins;
score.classList.add(".score");
showResults.appendChild(score);
const results = document.createElement("ul");
results.classList.add("results");
showResults.appendChild(results);

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));


