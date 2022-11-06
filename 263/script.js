"use strict";

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
      item: 1,
    };

    button.onclick = () => {
      const itemToChange = selectItem();
      itemToChange.textContent = ++itemToChange.textContent;

      function selectItem() {
        const updateContainer = () => {
          return updateClassSelector("container", lastChanged);
        };

        return changeItemBasedOnContainer();

        function changeItemBasedOnContainer() {
          console.log(lastChanged);

          if (lastChanged.container === numContainers) {
            if (lastChanged.item === numItemsPerContainer) {
              lastChanged.item = null;
            }
            return updateClassSelector(
              "item",
              lastChanged,
              true,
              updateContainer(),
            );
          } else {
            return updateClassSelector(
              "item",
              lastChanged,
              false,
              updateContainer(),
            );
          }
        }
      }

      function updateClassSelector(
        classPrefix,
        actualIndex,
        canChange = true,
        parent = document,
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
