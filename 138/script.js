let player = document.querySelector("#player");

let translatePixels = 0;

function transform(side, n) {

    if (side == 'right') {
        return function(e) {
            translatePixels += n;
            player.style.transform = `translate(${translatePixels}px)`;
        }
    }
    if (side == 'left') {
        return function(e) {
            translatePixels -= n;
            player.style.transform = `translate(${translatePixels}px)`;
        }
    }
    if (side == 'top') {
        return function(e) {
            translatePixels -= n;
            player.style.transform = `translateY(${translatePixels}px)`;
        }
    }
    if (side == 'bottom') {
        return function(e) {
            translatePixels += n;
            player.style.transform = `translateY(${translatePixels}px)`;
        }
    }
}

const translateRight = transform('right', 8);
const translateLeft = transform('left', 8);
const translateTop = transform('top', 8);
const translateBottom = transform('bottom', 8);