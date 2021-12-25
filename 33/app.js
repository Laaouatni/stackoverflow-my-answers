let blankSquare = document.querySelectorAll(".square");
let hidText = document.querySelector(".hidText");

let index = 0;

function fillUp() {
    let myInterval = setInterval(() => {
        blankSquare[index++].classList.add("fill")
        console.log("index: " + index);
        if (index > 4) {
            hidText.classList.add("display");
            console.log("index: " + index + " so is hidden now");
            /* stop the setInterval */
            clearInterval(myInterval);
        }
    }, 1000);

}

fillUp();