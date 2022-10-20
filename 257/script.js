const containers = document.querySelectorAll(".container");
const saveBtn = document.getElementById("save");

containers.forEach((c, cIndex) => {
  const subBtns = c.querySelectorAll(".sub");
  const addBtns = c.querySelectorAll(".add");
  const qtyInputs = c.querySelectorAll(".qty");

  // add
  addBtns.forEach((btn, btnIndex) => {
    btn.onclick = () => {
      qtyInputs[btnIndex].valueAsNumber += 10;
    };
  });

  // sub
  subBtns.forEach((btn, btnIndex) => {
    btn.onclick = () => {
      if (qtyInputs[btnIndex].valueAsNumber !== 0) {
        qtyInputs[btnIndex].valueAsNumber -= 1;
      }
    };
  });

  saveBtn.addEventListener("click", () => {
    const maxLenght = Math.max(subBtns.length, addBtns.length);
    for (let btnIndex = 0; btnIndex <= maxLenght; btnIndex++) {
      console.log(qtyInputs[btnIndex])
      localStorage.setItem(cIndex, "hello");
    }
  });
});
