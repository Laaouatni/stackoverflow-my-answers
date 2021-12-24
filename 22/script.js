let pixelContainer = document.querySelectorAll('.pixel-container');

let numPixel = 100 - 1; // is because one pixel is already created

function createPixel() {
    /* create a pixel in your top left corner */
    pixelContainer[0].innerHTML += '<div class="pixel"></div>';

    /* create a pixel in your top right corner */
    pixelContainer[1].innerHTML += '<div class="pixel"></div>';
}

/* lopping the createPixel() */
for (let index = 0; index < numPixel; index++) {
    createPixel();
}