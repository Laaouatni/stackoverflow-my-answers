let div = document.querySelector("#div");
let firstPositionX;
let firstPositionY;

let lastPositionX;
let lastPositionY;

document.addEventListener("mousedown", function(e1) {
    div.style.display = "block";

    div.style.width = 0 + "px";
    div.style.height = 0 + "px";

    firstPositionX = e1.clientX;
    firstPositionY = e1.clientY;

    div.style.top = firstPositionY + "px";
    div.style.left = firstPositionX + "px";

    div.style.transition = "none";

    document.addEventListener("mousemove", function(e2) {
        lastPositionX = e2.clientX;
        lastPositionY = e2.clientY;

        if ((firstPositionX - lastPositionX) < 0) {
            div.style.width = Math.round(lastPositionX - firstPositionX) + "px";
        } else {
            div.style.width = Math.round(firstPositionX - lastPositionX) + "px";
            div.style.left = lastPositionX + "px";
        }

        if ((firstPositionY - lastPositionY) < 0) {
            div.style.height = Math.round(lastPositionY - firstPositionY) + "px";
        } else {
            div.style.height = Math.round(firstPositionY - lastPositionY) + "px";
            div.style.top = lastPositionY + "px";
        }

    });
});


document.addEventListener("mouseup", function() {
    div.style.width = "0px";
    div.style.height = "0px";
    div.style.transition = "all 0.3s";

    setTimeout(function() {
        div.style.display = "none";
    }, 300)

});