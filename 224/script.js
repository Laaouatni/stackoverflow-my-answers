import Card from "./Card.js";

function randomMath(obj) {
  for (let i = 0; i < 100; i++) {
    let card = new Card().element;

    let cardOutputs = {
      first: card.querySelector(".first-number"),
      second: card.querySelector(".second-number"),
      result: card.querySelector(".result-number")
    }

    let arr = [];
    
    for (let j = 0; j < 2; j++) { 
      arr.push(Math.round(Math.random() * 100));
    }

    cardOutputs.first.textContent = arr[0] >= 10 ? arr[0] : `0${arr[0]}`;
    cardOutputs.second.textContent = arr[1] >= 10 ? arr[1] : `0${arr[1]}`;
    cardOutputs.result.textContent = Math.round(arr[0] + arr[1] >= 10 ? arr[0] + arr[1] : `0${arr[0] + arr[1]}`);
  }
}

randomMath({});

