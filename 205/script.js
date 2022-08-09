let remToPx = (rem) => rem * 16;

/* the width of the shadow shadow */
let elementWidth = remToPx(
  parseInt(document.body.style.getPropertyValue("--shadow-width")),
);

window.addEventListener("mousemove", (e) => {
  /* x position */
  let x = e.offsetX;
  /* y position */
  let y = e.offsetY;

  /* we add in the body two css variables */
  document.body.style.setProperty("--x", x + "px");
  document.body.style.setProperty("--y", y + "px");
});