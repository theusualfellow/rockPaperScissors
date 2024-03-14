function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    let randomChoice= choices[randomNumber];
    return randomChoice;
}
function playGame(playerSelection, computerSelection){
    let playerSelectionClean = playerSelection.toLowerCase();
    console.log(playerSelectionClean);
    if  (playerSelectionClean != "rock" &&
        playerSelectionClean != "paper" &&
        playerSelectionClean != "scissors"){
            console.log("invalid input");
        }
    else if(playerSelectionClean == computerSelection){
        return"it's a tie";
    }
    else if(playerSelectionClean=="paper" && computerSelection=="rock"){
        return"you win";
    }
    else if(playerSelectionClean=="scissors" && computerSelection=="paper"){
        return"you win";
    }
    else if(playerSelectionClean=="rock" && computerSelection=="scissors"){
        return "you win";
    }
    else{
        return"you lose";
    }
}

playGame("Scissors", getComputerChoice());