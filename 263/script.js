function generateGrid(
  parentElement = document.body,
  numContainers = 5,
  numItemsPerContainer = 3,
) {
  for (let i = 0; i < numContainers; i++) {
    const container = document.createElement("div");
    parentElement.appendChild(container);
    container.classList.add(`container-${i + 1}`, "container");

    for (let j = 0; j < numItemsPerContainer; j++) {
      const child = document.createElement("div");
      child.classList.add(`item-${j + 1}`, "item");
      child.textContent = 0;
      container.appendChild(child);
    }
  }

  const upperContainer = document.createElement("div");
  document.body.appendChild(upperContainer);
  upperContainer.appendChild(parentElement);

  const button = document.createElement("button");
  button.textContent = "click me";
  upperContainer.appendChild(button);

  BtnLogic();

  function BtnLogic() {
    let lastChanged = {
      container: null,
      item: null,
    };

    button.onclick = () => {
      changeContainerDependsOnSituation();

      function changeContainerDependsOnSituation() {
        const sameContainer = () =>
          updateClassSelector("container", lastChanged, undefined, false);
        const updateContainer = () => {
          updateClassSelector("container", lastChanged);
          lastChanged.item = null;
        };

        const choosedContainer =
          lastChanged.item === numItemsPerContainer
            ? updateContainer()
            : sameContainer();
            
        console.log(updateClassSelector("item", lastChanged, choosedContainer));
        console.log(lastChanged);
      }

      function updateClassSelector(
        classPrefix,
        actualIndex,
        parent = document,
        canChange = true,
      ) {
        if (canChange) {
          return parent.querySelector(
            `.${classPrefix}-${
              actualIndex[classPrefix] ===
              parentElement.querySelectorAll(`.${classPrefix}`).length
                ? resetIndexClass()
                : ++actualIndex[classPrefix]
            }`,
          );
        } else {
          return parent.querySelector(
            `.${classPrefix}-${actualIndex[classPrefix] || 1}`,
          );
        }

        function resetIndexClass() {
          const DEFAULT_VALUE = 1;
          actualIndex[classPrefix] = DEFAULT_VALUE;
          return DEFAULT_VALUE;
        }
      }
    };
  }
}

const parent = document.querySelector(".flex-container");
generateGrid(parent);
