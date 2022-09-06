// this can be any preudo class that tailwind can have
twPseudo("focus");
// if there is nothing as parameter, we use hover
twPseudo();

function twPseudo(pseudo = "hover") {
  // get only the elements that have the hover attribute
  let hoverEls = document.querySelectorAll(`[data-${pseudo}]`);

  // loop through the elements that have the hover attribute
  hoverEls.forEach((el) => {
    // we get the string inside the attribute
    // and then make it into a array
    let twHoverClasses = `${el.dataset[pseudo]}`.split(" ");

    // loop through the classes inside the element's attributes
    twHoverClasses.forEach((className) => {
      // add the class for you `hover:className`
      el.classList.add(`${pseudo}:${className}`);
    });
  });
}
