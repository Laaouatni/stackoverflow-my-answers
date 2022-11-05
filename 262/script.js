function generateGrid(
  parentElement = document.body,
  numContainers = 2,
  numItemsPerContainer = 3,
) {
  for (let i = 0; i < numContainers; i++) {
    createContainer();

    function createContainer() {
      const container = document.createElement("div");
      parentElement.appendChild(container);

      container.classList.add(`container-${i + 1}`);

      createChilds();

      function createChilds() {
        for (let j = 0; j < numItemsPerContainer; j++) {
          const child = document.createElement("div");
          child.classList.add(`item-${j + 1}`);
          child.textContent = 0;

          container.appendChild(child);

          child.onclick = () => {
            child.textContent = +child.textContent + 1;
          }
        }
      }
    }
  }
}

generateGrid();
