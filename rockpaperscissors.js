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