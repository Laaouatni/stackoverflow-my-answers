const inputArea = document.querySelector("textarea");
const outputArea = document.querySelector("pre");

inputArea.addEventListener(
  "keyup",
  () => {
    outputArea.innerText = inputArea.value;
    PR.prettyPrint();
  },
  false,
);
