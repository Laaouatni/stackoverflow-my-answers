const operators = document.querySelectorAll(".operators button");
const string = screenInput.innerHTML;
const lastCharacter = string[string.length - 1];
console.log(lastCharacter);

if (lastCharacter === "+") {
  operators
    .querySelectorAll(":not(#add-operator)")
    .forEach((el) => (el.disabled = true));
}