function addCell(color) {
  let container = document.getElementById(color + "-container");
  
  let cell = document.createElement("div");
  cell.innerText = color;
  container.appendChild(cell).className = "container-item";
}