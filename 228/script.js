twHover();

function twHover() {
  // get only the elements that have the hover attribute
  let hoverEls = document.querySelectorAll("[data-hover]");

  // loop through the elements that have the hover attribute
  hoverEls.forEach((el) => {
    // we get the string inside the attribute
    // and then make it into a array
    let twHoverClasses = `${el.dataset.hover}`.split(" ");

    // loop through the classes inside the element's attributes
    twHoverClasses.forEach((className) => {
      // add the class for you `hover:className`
      el.classList.add(`hover:${className}`);
    });
  });
}
