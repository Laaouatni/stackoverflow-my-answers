/* choose your parent element (that can be also a <body> if you want all elements) */
let parent = document.querySelectorAll(".animated");

parent.forEach((el) => {
    /* get all h3 from parent (if you want all elements use "*" selector)*/
    let childs = el.querySelectorAll("h3");

    childs.forEach(childEl => {
        /* if overflow then add class */
        if (childEl.scrollWidth > childEl.offsetWidth) {
            childEl.classList.add("text-animated");
        }
    });
});