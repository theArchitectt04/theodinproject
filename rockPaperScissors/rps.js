let playerScore = 0;
let computerScore = 0;
game();


function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(((Math.random())*3))];
}



function playRound(playerSelection, computerSelection) {

    let result;

    if(playerSelection === computerSelection){
        result = 'tie';   

    } else if(playerSelection === 'rock'){
        if ( computerSelection === 'paper') { result = 'computer wins'; computerScore++ }     
         else { result = 'you win!' ; playerScore++; }
        

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){ result = 'computer wins'; computerScore++;}       
         else { result = 'you win!'; playerScore++; }
        

    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') {result = 'computer wins'; computerScore++;} 
         else {result = 'you win!'; playerScore++;  }
    }
    return result;
}

function game(){
    for(let i = 1; i<=5; i++){
        let playerSelection = prompt('enter choice : ').toLowerCase();
        let computerSelection =  computerPlay();
        console.log(`round ${i}`);
        console.log(`YOU : ${playerSelection}`);
        console.log(`COMPUTER : ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    if (computerScore === playerScore) {
        console.log("YOU ${playerScore} - ${computerScore} COMPUTER. Computer wins!`.It's a tie!");
    }   else if(computerScore > playerScore){
        console.log(`YOU ${playerScore} - ${computerScore} COMPUTER. Computer wins!`);
    }   else console.log(`YOU ${playerScore} - ${computerScore} COMPUTER. You win!`)
    
}