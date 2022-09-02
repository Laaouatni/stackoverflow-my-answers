export default class Card {
  #CONTAINER = document.querySelector("#container");
  #TEMPLATE = document
    .querySelector("template#card")
    .content.querySelector("div")
    .cloneNode(true);

  constructor() {
    this.container = this.#CONTAINER;
    this.template = this.#TEMPLATE;

    this.container.appendChild(this.template);
  }

  get element() {
    return this.template;
  }
}
