let inputs = document.querySelectorAll("textarea");
let langs = ["html", "css", "javascript"];

inputs.forEach((input, index) => {
  // if the code is saved before, it will get that
  input.textContent = localStorage.getItem(`${langs[index]}`) || "";

  // every time the input is changed we save and ovveride the past value
  input.addEventListener("input", () => {
    // we save the data locally,
    // and if the user reopens the websiste the data is still in the database.
    localStorage.setItem(`${langs[index]}`, input.value);

    hljs.highlightElement(input);
  });
});
