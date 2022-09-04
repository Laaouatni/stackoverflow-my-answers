import generateGraph from "./src/generateGraph.js";
const formula = "1*(x*x)+1*x";

generateGraph(formula, 10);

let input = document.querySelector("input");
input.addEventListener("input", (e) => {
  generateGraph(formula, e.target.value);
});