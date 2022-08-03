/* your selectors */
let root = document.querySelector(":root");
let panes = document.querySelectorAll(".slot_item");

let spinBtn = document.querySelector("#spinBtn");
let machines = document.querySelectorAll(".slot-machine");

/* math data */
let degree1 = 310; // before was 505 (309 center correcly)
let paneSize = 100;
let zDepth = paneSize / (2 * Math.tan(Math.PI / panes.length));

root.style.setProperty("--slot1Rotate", `${degree1}deg`);

/* machines logic */
machines.forEach((thisMachine) => {
  let thisMachinePanes = thisMachine.querySelectorAll(".slot_item");

  /* button clicking logic */
  spinBtn.addEventListener("click", () => {
    thisMachine.classList.add("animation");
  });

  /* animation end logic */
  thisMachine.addEventListener("animationend", () => {
    /* for making animation run every time on click, because you can't add a class if there is the same class before */
    thisMachine.classList.remove("animation");
    thisMachine.style.transform = `rotateX(${degree1}deg)`;
  });

  /* panes logic */
  thisMachinePanes.forEach((thisPane, index) => {
    let xAngle = (360 / panes.length) * index;
    thisPane.style.transform = `rotateX(${xAngle}deg) translateZ(${zDepth}px)`;
  });
});
