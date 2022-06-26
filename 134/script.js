let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");

let select = document.querySelector(".select");
let computerChoice = document.querySelector(".comp-choice");
let result = document.querySelector(".result");

let allChoices = ["Rock", "Paper", "Scissors"];
let allButtons = [rock, paper, scissors];

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

allButtons.forEach((choice, index) => {
    choice.addEventListener("click", () => {
        let randomNum = Math.floor(Math.random() * 3);
        let compChoice = allChoices[randomNum];
        let userChoice = allChoices[index];

        console.log(userChoice)

        select.innerHTML = `select: ${userChoice}`;
        result.style.removeProperty("color");
        computerChoice.innerHTML = `Computer choose: ${compChoice}`;

        if( compChoice == winLoseArray[index].toWin) {
            result.innerHTML = allResults[0].message;
result.style = allResults[0].color;
}
        if (compChoice == userChoice) {
            result.innerHTML = allResults[1].message;
            result.style.color = allResults[1].color;
        }
        
        if(compChoice == winLoseArray[index].toLose) {
            result.innerHTML = allResults[3].message;
            result.style.color = allResults[3].color;
        }

        result.classList.remove("animation"); 
        result.classList.add("animation");
    });
});