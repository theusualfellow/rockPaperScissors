function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    let randomChoice= choices[randomNumber];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    let playerSelectionClean = playerSelection.toLowerCase();
    console.log(playerSelectionClean);
    if  (playerSelectionClean != "rock" &&
        playerSelectionClean != "paper" &&
        playerSelectionClean != "scissors"){
            throw"invalid input";
        }
    else if(playerSelectionClean == computerSelection){
        return"it's a tie";
    }
    else if(
        playerSelectionClean=="paper" && computerSelection=="rock" ||
        playerSelectionClean=="scissors" && computerSelection=="paper" ||
        playerSelectionClean=="rock" && computerSelection=="scissors"
    ){
        return"you win";
    }
    else{
        return"you lose";
    }
}


function playGame(){
    
    let counter = 0;
    for(let i=0; i<5; i++){
        
        let choice = prompt("enter your choice");
        
        let result = playRound(choice, getComputerChoice());
        console.log(result);
        if (result == "you win"){
            
            counter++;
        }
        else{
            continue;
        }
        
    }
    return counter
    
}

console.log("your score is "+playGame());
