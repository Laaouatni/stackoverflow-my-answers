let currentScroolPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".storys-container")
const hScroll = document.querySelector(".horizontal-scroll")
const btnScrollLeft = document.querySelector("#btn-scroll-left")
const btnScrollRight = document.querySelector("#btn-scroll-right")


btnScrollLeft.style.opacity = "0"


let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    currentScroolPosition += (val * scrollAmount);

    if (currentScroolPosition > 0) {
        currentScroolPosition = 0;
        btnScrollLeft.style.opacity = "0"
    } else {
        btnScrollLeft.style.opacity = "1"

    }

    if (currentScroolPosition <= maxScroll) {
        currentScroolPosition = maxScroll;
        btnScrollRight.style.opacity = "0"
    } else {
        btnScrollRight.style.opacity = "1"

    }


    sCont.style.left = currentScroolPosition + "px";
}