const dinoData = [
  {
    name: "my dino",
    type: "carnivorous",
    weight: "1000kg",
    image: "https://picsum.photos/559",
  },
  {
    name: "another dino",
    type: "herbivorous",
    weight: "350kg",
    image: "https://picsum.photos/560",
  },
  {
    name: "alex dino",
    type: "carnivorous",
    weight: "500kg",
    image: "https://picsum.photos/561",
  },
  {
    name: "hello dino",
    type: "carnivorous",
    weight: "10kg",
    image: "https://picsum.photos/562",
  },
  {
    name: "minecraft dino",
    type: "carnivorous",
    weight: "957kg",
    image: "https://picsum.photos/563",
  },
  {
    name: "js dino",
    type: "herbivorous",
    weight: "486kg",
    image: "https://picsum.photos/564",
  },
  {
    name: "fish dino",
    type: "carnivorous",
    weight: "400kg",
    image: "https://picsum.photos/565",
  },
];

const container = document.querySelector("#container") ?? document.body;
const card = document.querySelector("#card-template").content;

dinoData.forEach((dino) => {
  const newCard = card.cloneNode(true);

  newCard.querySelector(".name").textContent = dino.name;
  newCard.querySelector(".type").textContent = dino.type;
  newCard.querySelector(".weight").textContent = dino.weight;
  newCard.querySelector(".image").src = dino.image;

  container.appendChild(newCard);
});

let cardArray = document.querySelectorAll(".card");

/* alfabetic button */
document.querySelector("#btn-alf").addEventListener("click", () => {
  sortAlfabetic(cardArray);
});

/* carnivorous button */
document.querySelector("#btn-carn").addEventListener("click", () => {
  showOnlyCarnivorous(cardArray);
});

/* herbivorous button */
document.querySelector("#btn-herb").addEventListener("click", () => {
  showOnlyHerbivorous(cardArray);
});

function sortAlfabetic(cards) {
  const sorted = [...cards].sort((a, b) => {
    return `${a.querySelector(".name").textContent}`.localeCompare(
      `${b.querySelector(".name").textContent}`,
    );
  });

  sorted.forEach((sortedCard, index) => {
    sortedCard.classList.remove("hidden");
    sortedCard.classList.add(`order-${index}`);
  });

  return sorted;
}

function showOnlyCarnivorous(cards) {
  const sorted = sortAlfabetic(cards).filter((card) => {
    return card.querySelector(".type").textContent == "carnivorous";
  });

  cards.forEach((card, index) => {
    card.classList.add(`hidden`);
  });

  sorted.forEach((sortedCard, index) => {
    sortedCard.classList.remove(`hidden`);
  });
}

function showOnlyHerbivorous(cards) {
  const sorted = sortAlfabetic(cards).filter((card) => {
    return card.querySelector(".type").textContent == "herbivorous";
  });

  cards.forEach((card, index) => {
    card.classList.add(`hidden`);
  });

  sorted.forEach((sortedCard, index) => {
    sortedCard.classList.remove(`hidden`);
  });
}
