let player = document.querySelector("#player");

let translatePixels = {
    x: 0,
    y: 0
};

let { x, y } = translatePixels;

function transform(side, n) {
    switch (side) {
        case "right":
            x += n;
            break;
        case "left":
            x -= n;
            break;
        case "bottom":
            y += n;
            break;
        case "top":
            y -= n;
            break;
    }

    player.style.transform = `translate(${x}px, ${y}px)`;
}

const translateRight = transform('right', 8);
const translateLeft = transform('left', 8);
const translateTop = transform('top', 8);
const translateBottom = transform('bottom', 8);