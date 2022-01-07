let myText = "Hello World"; // just change this to change the title text
let titleContainer = document.getElementById("titleContainer");

for (let i = 0; i < myText.length; i++) {
    let letter = document.createElement("span");
    let randomNumber = Math.floor(Math.random() * 4) - 2;

    titleContainer.appendChild(letter);

    if (myText[i] === " ") {
        letter.innerHTML = "&nbsp;";
    } else {
        letter.innerHTML = myText[i];
    }

    letter.style = "--i:" + randomNumber;
}