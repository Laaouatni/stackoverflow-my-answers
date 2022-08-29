function start() {
  let start = performance.now();
  document.getElementById("first").remove();
  let end = performance.now();
  console.log("function takes " + (end - start) + " milliseconds");
}
