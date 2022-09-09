// getting all .top elements
let topEls = document.querySelectorAll(".top");

topEls.forEach((el, index) => {
  // this childs variable is a array with all elements between
  let childs = getBetweenElements(topEls[index], topEls[index + 1]);

  // we add a click event to the top element
  // and toogle a simple class (that hide and show)
  el.addEventListener("click", () => {
    childs.forEach((child) => child.classList.toggle("hidden")); // change here the logic to do also more (animation or etc...)
  });
});

// this function is getted from my previous answer on this topic
// https://stackoverflow.com/a/73425961/17716837
function getBetweenElements(firstElement, secondElement) {
  let result = [];
  let nextEl = firstElement.nextElementSibling;

  while (nextEl !== secondElement) {
    result.push(nextEl);
    nextEl = nextEl.nextElementSibling;
    if (nextEl === null) break;
  }

  return result;
}
