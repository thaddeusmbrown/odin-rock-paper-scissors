function computerPlay() {
    let randomChance = Math.random();
    console.log(randomChance);
    if (randomChance<0.333) {
        return "rock";
    } else if (randomChance<0.667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
            console.log("Tie game! Rock ties Rock.");
            return 0;
        } else if (computerSelection=="paper") {
            console.log("You lose! Paper beats Rock");
            return -1;
        } else {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    } else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            console.log("You win! Paper beats Rock.");
            return 1;
        } else if (computerSelection=="paper") {
            console.log("You tie! Paper ties Paper");
            return 0;
        } else {
            console.log("You lose! Scissors beats Paper.");
            return -1;
        }
    } else {
        if (computerSelection=="rock") {
            console.log("You lose! Rock beats Scissors.");
            return -1;
        } else if (computerSelection=="paper") {
            console.log("You win! Scissors beats Paper");
            return 1;
        } else {
            console.log("You tie! Scissors ties Scissors.");
            return 0;
        }
    }
}

function game() {
    let roundCounter = 0;
    let score = 0; //if >0, player is winning
    while (roundCounter < 5) {
        score += playRound(prompt("Choose Rock, Paper, or Scissors."), computerPlay());
        roundCounter++;
    }
    if (score>0) {
        console.log("Player wins!");
    } else if (score == 0) {
        console.log("Tie game!");
    } else {
        console.log("Computer wins!");
    }
}