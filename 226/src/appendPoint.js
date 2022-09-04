export default function appendPoint(container = document.body) {
  const child = document.createElement("div");
  child.classList +=
    "point bg-blue-600 h-1 w-1 flex justify-center rounded-full";

  let newPointEl = child.cloneNode(true);
  container.appendChild(newPointEl);

  return newPointEl;
}
