//create elements that we will need

const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")
const result = document.createElement("div")
const announcement= document.createElement("p")
const body = document.querySelector("body")
const reset = document.createElement('button')

rock.innerText ="rock"
paper.innerText= "paper"
scissors.innerText= "scissors"
reset.innerText="play again"

let playerSelection= ''
let playerScore=0
let computerScore=0

//add the created buttons to the body

body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissors)
body.appendChild(result)
body.appendChild(announcement)

//function to add text to div and p elements that shows player and computer score
//disables the buttons once either score reaches 5

function playGame(){
    if(playerScore<5 || computerScore<5){
        playerSelection= "rock"
        result.innerText=playRound(playerSelection, getComputerChoice())
        announcement.innerText=`player score :${playerScore} \n computer score: ${computerScore}`
    }
    if(playerScore==5 || computerScore==5){
        rock.disabled=true;
        paper.disabled=true;
        scissors.disabled=true;
        
    }
   
}

//add eventListeners to call above function when clicked

rock.addEventListener("click", playGame)
paper.addEventListener("click",playGame)
scissors.addEventListener("click",playGame)

//to get random choice from the computer

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    let randomChoice= choices[randomNumber];
    console.log(randomChoice)
    return randomChoice;
    
}

//checks who won that round based on which button is clicked against computer choice

function playRound(playerSelection, computerSelection){
    
    if(playerSelection == computerSelection){
        console.log( )
        return"it's a tie";
    }
    else if(
        playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="scissors" && computerSelection=="paper" ||
        playerSelection=="rock" && computerSelection=="scissors"
    ){
        playerScore++  
        if(playerScore<5){
            return"you win this round";
        }

        //once player score reaches 5 it shows the reset button to play another game
        //and returns the winning statement
        if(playerScore>=5){
            body.appendChild(reset)
            return"you won this game"
            
        }        

    }
    else{
        computerScore++
        if(computerScore<5){
            return"you lose this round";
        }
        //once computer score reaches 5 it shows the reset button to play another game
        //and returns the losing statement
        if(computerScore>=5){
            body.appendChild(reset)
            return"you lost this game"
        }  

    }
}
//function to reset everything

function playAgain(){
    playerScore=0
    computerScore=0
    result.innerText=""
    announcement.innerText=''
    rock.disabled=false;
    paper.disabled=false;
    scissors.disabled=false;
    body.removeChild(reset)
}

reset.addEventListener('click',playAgain);


