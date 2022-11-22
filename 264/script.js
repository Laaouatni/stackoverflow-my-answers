const menuData = [
  {
    name: "Kg",
    price: 440,
  },
  {
    name: "Taco",
    price: 30,
  },
  {
    name: "Dorado",
    price: 24,
  },
  {
    name: "1LtCSM",
    price: 50,
  },
  {
    name: "1/2CSM",
    price: 25,
  },
  {
    name: "Boing",
    price: 20,
  },
  {
    name: "Cafe",
    price: 20,
  },
  {
    name: "Refresco",
    price: 25,
  },
];

generateGrid(menuData, document.querySelector(".icons-container"));

function generateGrid(menuData, parent) {
  let total = 0;

  menuData.forEach((menuItem) => {
    const btn = document.createElement("button");
    const h3 = document.createElement("h3");

    btn.appendChild(h3);
    parent.appendChild(btn);
    
    h3.textContent = menuItem.name;

    btn.addEventListener("click", () => {
      const priceEl = document.getElementById("price");
      const totalEl = document.getElementById("total");

      total += menuItem.price;

      priceEl.textContent = menuItem.price;
      totalEl.textContent = total;
    });
  });
}
