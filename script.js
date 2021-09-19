function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const max = 2;

    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        result.textContent = "It's a tie!";
        return 0;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result.textContent = "You win! Rock beats Scissors!";
            return 1;
        } else {
            result.textContent = "You lose! Paper beats Rock";
            return -1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "You win! Paper beats Rock!";
            return 1;
        } else {
            result.textContent = "You lose! Scissors beats Paper";
            return -1;
        }
    } else {
        if (computerSelection == "paper") {
            result.textContent = "You win! Scissors beats Paper!";
            return 1;
        } else {
            result.textContent = "You lose! Rock beats Scissors!";
            return -1;
        }
    }
}

function restart(){
    playerWins = 0;
    cpuWins = 0;
    enableGame();
    result.textContent = "";
    const playAgain = document.querySelector(".play-again");
    playAgain.remove();
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
        const playAgain = document.createElement("button");
        playAgain.classList.add("play-again");
        playAgain.setAttribute("style", "width: 80px; height: 40px; color: black;");
        playAgain.textContent = "Play again!"

        if (playerWins == 5) {        
            result.textContent = "You won!";
        }else if (cpuWins == 5) {
            result.textContent = "You lost!";
      }
      disableGame();
      showResults.appendChild(playAgain);

      playAgain.addEventListener("click", () => restart());
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const showResults = document.querySelector(".show-results");
const score = document.createElement("p");
const result = document.createElement("p");
let playerWins = 0;
let cpuWins = 0;

const rockListener = () => { game("rock"); };
const paperListener = () => { game("paper"); };
const scissorsListener = () => { game("scissors"); };


score.setAttribute("style", "font-size: 50px;");
result.setAttribute("style", "font-size: 30px; margin: 5% 0%;")

score.textContent = playerWins + " - " + cpuWins;
showResults.appendChild(score);
showResults.appendChild(result);

enableGame();

function enableGame(){
    rock.addEventListener("click", rockListener);
    paper.addEventListener("click", paperListener);
    scissors.addEventListener("click", scissorsListener);    
}

function disableGame(){
    rock.removeEventListener("click", rockListener);
    paper.removeEventListener("click", paperListener);
    scissors.removeEventListener("click", scissorsListener);
}

