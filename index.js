//function to get computer's choice
function getComputerChoice(){
    let x = Math.random() * (4-1) + 1;
    if(x>=1 && x<=2)
        return "Rock";
    else if(x>=2 && x<=3)
        return "Paper";
    else
        return "Scissors";
}

//function to get Human's choice as input
function getHumanChoice(){
    let x = prompt("Rock! Paper! Scissors!");
    return x;
}

//function to calculate score for every round and display whether win or lose
function playRound(humanChoice, computerChoice){
    computerChoice = computerChoice.toUpperCase();
    humanChoice = humanChoice.toUpperCase();
    console.log("Computer: " + computerChoice + "\nYou: " + humanChoice);

    if(humanChoice === computerChoice){
        console.log("It's a Draw!");
        return "a";
    }
    else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("You Lose! Paper beats Rock");
        return "C";
    }
    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("You Win! Rock beats Scissors");
        return "H";
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){    
        console.log("You Lose! Scissors beats Paper");
        return "C";
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("You Win! Paper beats Rock");
        return "H";
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        console.log("You Lose! Rock beats Scissors");
        return "C";
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("You Win! Scissors beats paper");
        return "H";
    }
}

function playGame(){
    let humanScore = 0, computerScore = 0;
    let score = '';
    let computer = "", human = "";
    for(let i=0; humanScore<5 && computerScore<5; i++){
        computer = getComputerChoice();
        human = getHumanChoice();
        score = playRound(human, computer);
        if(score === 'H')
            humanScore++;
        else if(score === 'C')
            computerScore++;
        console.log("Computer: " + computerScore + "\nYou: " + humanScore);
    }
    if(humanScore>computerScore)
        return 1;
    else
        return 0;
}

let x = playGame();
if(x===0)
    console.log("Oh no! You lost");
else
    console.log("Yayy! You won");