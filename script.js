function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    let randomChoice= choices[randomNumber];
    console.log(randomChoice);
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
        console.log("it's a tie");
    }
    else if(playerSelectionClean=="paper" && computerSelection=="rock"){
        console.log("you win");
    }
    else if(playerSelectionClean=="scissors" && computerSelection=="paper"){
        console.log("you win");
    }
    else if(playerSelectionClean=="rock" && computerSelection=="scissors"){
        console.log("you win");
    }
    else{
        console.log("you lose");
    }
}

playGame("Scissors", getComputerChoice());