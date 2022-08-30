let inputs = document.querySelectorAll("textarea");
let langs = ["html", "css", "javascript"];

let outputs = document.querySelectorAll("code");

inputs.forEach((input, index) => {
  input.value = localStorage.getItem(`${langs[index]}`) || "";
  updateCode(input, index);

  input.addEventListener("input", () => {
    localStorage.setItem(`${langs[index]}`, input.value);
    updateCode(input, index);
  });
});

function updateCode(input, index) {
  outputs[index].textContent = input.value;
  hljs.highlightElement(outputs[index]);
}
