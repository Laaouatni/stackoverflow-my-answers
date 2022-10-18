const addBtn = document.getElementById("add");
const add2Btn = document.getElementById("add2");

const subBtn = document.getElementById("sub");
const sub2Btn = document.getElementById("sub2");

const qty = document.getElementById("qtyBox");
const qty2 = document.getElementById("qtyBox2");

const saveBtn = document.getElementById("save");

const addBtnsArray = [addBtn, add2Btn];
const subBtnsArray = [subBtn, sub2Btn];
const qtyArray = [qty, qty2];

addBtnsArray.forEach((btn) => {
  btn.onclick = () => {
    qty.value += 10;
  };
});

subBtnsArray.forEach((btn) => {
  btn.onclick = () => {
    if (qty.value !== 0) qty.value -= 1;
  };
});

saveBtn.onclick = () => {
  qtyArray.forEach(input => {
    
  })
};
