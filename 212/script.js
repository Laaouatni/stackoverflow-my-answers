function getBetweenElements(firstElement, secondElement) {
  let result = [];
  let nextEl = firstElement.nextElementSibling;

  while (nextEl !== secondElement) {
    result.push(nextEl);
    nextEl = nextEl.nextElementSibling;
  }

  return result;
}

console.log(
  getBetweenElements(
    document.getElementById("first"),
    document.getElementById("second"),
  ),
);
