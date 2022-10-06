const inputArea = document.querySelector("textarea");
const outputArea = document.querySelector("pre code");

inputArea.addEventListener("input", () => {
  outputArea.innerHTML = inputArea.value;
  hljs.highlightElement(outputArea);
});
