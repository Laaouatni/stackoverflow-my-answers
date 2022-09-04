import appendPoint from "./appendPoint.js";

export default function generateXYpoints(arr) {
  let container = document.querySelector("#container>*");
  container.innerHTML = '';

  arr.forEach((el) => {
    let newPoint = appendPoint(container);
    newPoint.classList.add("absolute");
    newPoint.style.bottom = `${el.y}px`;
    newPoint.style.left = `${el.x}px`;
  });
}