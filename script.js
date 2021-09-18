function computerPlay(){
    const choice = ["Rock", "Paper", "Scissors"];
    const max = 2;
    
    return choice[Math.floor(Math.random()*3)];
}

function playerPlay(){
    const choice = prompt("Enter rock, paper or scissors:");
    return choice;
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const cpu = computerSelection.toLowerCase();

    if(player == cpu){
        console.log("It's a tie!");
        return 0;
    }

    if(player == "rock"){
        if(cpu == "scissors"){
            console.log("You win! Rock beats Scissors!");
            return 1;
        }else{
            console.log("You lose! Paper beats Rock");
            return -1;
        }
    }else if(player == "paper"){
        if(cpu == "rock"){
            console.log("You win! Paper beats Rock!");
            return 1;
        }else{
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
    }else{
        if(cpu == "paper"){
            console.log("You win! Scissors beats Paper!");
            return 1;
        }else{
            console.log("You lose! Rock beats Scissors!");
            return -1;
        }
    }   
}

function game(){
    let playerWins = 0;
    let cpuWins = 0;

    for(let i = 0; i < 5; i++){
        let roundWinner = playRound(playerPlay(), computerPlay());
        
        if(roundWinner > 0){
            playerWins++;
        }else if(roundWinner < 0){
            cpuWins++;
        }
    }

    if(playerWins > cpuWins){
        console.log("You won with a %i - %i score", playerWins, cpuWins);
    }else if(playerWins < cpuWins){
        console.log("You lost with a %i - %i score", playerWins, cpuWins);
    }else{
        console.log("You tie with a %i - %i score", playerWins, cpuWins);
    }
}