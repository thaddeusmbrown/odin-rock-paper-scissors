function computerPlay() {
    let randomChance = Math.random();
    if (randomChance<0.333) {
        return "rock";
    } else if (randomChance<0.667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound() {
    let playerSelection=this.className.toLowerCase();
    let computerSelection=computerPlay();
    const div = document.querySelector('.Results');
    const scorediv = document.querySelector('.Score');
    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
            div.innerText = "Tie game! Rock ties Rock.";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv);
        } else if (computerSelection=="paper") {
            computerScore++;
            div.innerText = "You lose! Paper beats Rock";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv);
        } else {
            playerScore++;
            div.innerText = "You win! Rock beats Scissors";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv); 
        }
    } else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            playerScore++;
            div.innerText = "You win! Paper beats Rock.";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv);
        } else if (computerSelection=="paper") {
            div.innerText = "You tie! Paper ties Paper";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv);
        } else {
            computerScore++;
            div.innerText = "You lose! Scissors beats Paper.";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv); 
        }
    } else {
        if (computerSelection=="rock") {
            computerScore++;
            div.innerText = "You lose! Rock beats Scissors.";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv);
        } else if (computerSelection=="paper") {
            playerScore++;
            div.innerText = "You win! Scissors beats Paper";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv); 
        } else {
            div.innerText = "You tie! Scissors ties Scissors.";
            scorediv.innerText = `Score now is Player: ${playerScore} Computer: ${computerScore}`;
            document.body.append(div);
            document.body.append(scorediv);
        }  
    }
    if (playerScore >= 5) {
        scorediv.innerText = "Player wins!";
        document.body.append(scorediv);
    } else if (computerScore >= 5) {
        scorediv.innerText = "Computer wins!";
        document.body.append(scorediv);
    }

}

function game() {

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', playRound));
}

let playerScore = 0;
let computerScore = 0;
game();