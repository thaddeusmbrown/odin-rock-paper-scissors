function computerPlay() {
    randomChance = Math.random();
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
            return "Tie game! Rock ties Rock.";
        } else if (computerSelection=="paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection=="paper") {
            return "You tie! Paper ties Paper";
        } else {
            return "You lose! Scissors beats Paper.";
        }
    } else {
        if (computerSelection=="rock") {
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection=="paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "You tie! Scissors ties Scissors.";
        }
    }
}

const playerSelection = "ScissorS";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));