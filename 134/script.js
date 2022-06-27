/* the buttons  */
let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");

/* elements where we will put a output the outputs */
let select = document.querySelector(".select");
let computerChoice = document.querySelector(".comp-choice");
let result = document.querySelector(".result");

/* all the buttons are one array, 
so we can use them in a forEach loop, 
without repeating a lot the code */
let allButtons = [rock, paper, scissors];

/* this is a array of choices (strings)
it must need to not be modified the order 
1. Rock 2. Paper 3. Scrissors */
let allChoices = ["Rock", "Paper", "Scissors"];

/* the firt {} is for victory, 
the second is for draw, 
the third is for losing */
/* and this array contain all the information you need 
for outputing the victory string with the color in #result */
let allResults = [{
    message: "Result: Congratulations, You won!",
    color: "#1e612b"
}, {
    message: "Result: It's a draw!",
    color: "#5c3000"
}, {
    message: "Result: Oh no, You lost!",
    color: "#8d1d1d"
}];

/* from this array we can see if user win or lose,
it must need to not be modified the order 
1. Rock 2. Paper 3. Scrissors */
let winLoseArray = [{
    toWin: allChoices[2],
    toLose: allChoices[1]
}, {
    toWin: allChoices[0],
    toLose: allChoices[2]
}, {
    toWin: allChoices[1],
    toLose: allChoices[0]
}]

/* forEach loop help us not writing the same code multiple times */
allButtons.forEach((choice, index) => {
    choice.addEventListener("click", () => {
        /* resetting the styles and animations */
        result.classList.remove("animation");
        result.style.removeProperty("color");

        /* random number */
        let randomNum = Math.floor(Math.random() * 3);

        /* get the choices of user, and computer */
        let compChoice = allChoices[randomNum];
        let userChoice = allChoices[index];

        /* display the choices in the UI */
        select.innerHTML = `select: ${userChoice}`;
        computerChoice.innerHTML = `Computer choose: ${compChoice}`;

        /* if else for displaying if user win or lose */
        if (compChoice == winLoseArray[index].toWin) {
            result.innerHTML = allResults[0].message;
            result.style.color = allResults[0].color;
        }

        if (compChoice == userChoice) {
            result.innerHTML = allResults[1].message;
            result.style.color = allResults[1].color;
        }

        if (compChoice == winLoseArray[index].toLose) {
            result.innerHTML = allResults[2].message;
            result.style.color = allResults[2].color;
        }

        /* THIS IS THE TRICK */
        setTimeout(() => {
            result.classList.add("animation")
        }, 1);
    });
});