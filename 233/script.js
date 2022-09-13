let inputs = document.querySelectorAll("input[type=range]");

inputs.forEach((range) => {
  range.addEventListener("input", () => {
    styleRange(range);
  });
});

function styleRange(input) {
  setWidth(input);
  setPosition(input);

  function setWidth(input) {
    input.parentElement.style.setProperty(
      "--before-width",
      `${calcBeforeWidth(input)}px`,
    );
  }

  function calcBeforeWidth(input) {
    return (Math.abs(input.value) * widthPerStep(input)).toFixed(2);
  }

  function widthPerStep(input) {
    const style = window.getComputedStyle(input);
    const totalWidth = parseFloat(style.getPropertyValue("width"));
    return totalWidth / numberSteps(input);
  }

  function numberSteps(input) {
    if (input.min < input.max) return Math.abs(input.min) + Math.abs(input.max);
    return Math.abs(input.max) - Math.abs(input.min);
  }

  function setPosition(input) {
    input.parentElement.style.setProperty(
      "--before-left",
      `${calcPositionLeft(input)}px`,
    );
  }

  function calcPositionLeft(input) {
    const style = window.getComputedStyle(input);
    const totalWidth = parseFloat(style.getPropertyValue("width"));
    if (input.getAttribute("value") > input.value)
      return (totalWidth / 2) - calcBeforeWidth(input);
    return totalWidth / 2;
  }
}
