let remToPx = (rem) => rem * 16;

/* the width of the trick shadow */
let elementWidth = remToPx(
  parseInt(document.body.style.getPropertyValue("--trick-width")),
);

window.addEventListener("mousemove", (e) => {
  /* destructuring for getting the correct x, y position from the returned value of the function in the bottom (and because there is "hoisting" it will work also if is in the bottom of the code) */
  let { x, y } = getMousePos(e);

  /* we add in the body two css variables */
  document.body.style.setProperty("--x", x + "px");
  document.body.style.setProperty("--y", y + "px");
});

/* here the is the logic for not making the scrollbar appear */
function getMousePos(e) {
  /* x position */
  let x =
    e.offsetX + elementWidth / 2 > window.innerWidth
      ? e.offsetX - elementWidth
      : e.offsetX - elementWidth / 2 < 0
      ? 0
      : e.offsetX - elementWidth / 2;

  /* y position */
  let y =
    e.offsetY + elementWidth / 2 > window.innerHeight
      ? e.offsetY - elementWidth
      : e.offsetY - elementWidth / 2 < 0
      ? 0
      : e.offsetY - elementWidth / 2;

  return { x, y };
}
