import generateGraph from "./src/generateGraph.js";
const formula = "1*(x*x)+3*x";

let input = document.querySelector("input");
generateGraph(formula, 20);

input.addEventListener("input", (e) => {
  generateGraph(formula, e.target.value);
});