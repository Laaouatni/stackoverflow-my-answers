import Card from "./Card.js";

export default function generateCard() {
  let card = new Card().element;

  let cardOutputs = {
    first: card.querySelector(".first-number"),
    second: card.querySelector(".second-number"),
    result: card.querySelector(".result-number"),
  };

  let arrRandom = [];

  let operationsArray = ["+", "-", "*"];

  let randomOperation =
    operationsArray[Math.round(Math.random() * (operationsArray.length - 1))];

  Object.values(cardOutputs).forEach((output, index) => {
    if (cardOutputs.result !== output) {
      arrRandom.push(Math.round(Math.random() * 100));
      output.textContent = addZeroPrefix(arrRandom[index]);
    } else {
      if (randomOperation === "+") {
        addiction();
      }

      if (randomOperation === "-") {
        if (arrRandom[0] > arrRandom[1]) {
          subtraction();
        } else {
          addiction();
        }
      }

      if (randomOperation === "*") {
        multiplication();
      }

      card.scrollIntoView({
        behavior: "smooth",
      });

      function addiction() {
        card.querySelector(".operator").textContent = "+";
        output.textContent = addZeroPrefix(arrRandom.reduce((a, b) => a + b));
      }

      function subtraction() {
        card.querySelector(".operator").textContent = "-";
        output.textContent = arrRandom.reduce((a, b) => a - b);
      }

      function multiplication() {
        card.querySelector(".operator").textContent = "*";
        output.textContent = arrRandom.reduce((a, b) => a * b);
      }
    }
  });

  function addZeroPrefix(num) {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  }
}
