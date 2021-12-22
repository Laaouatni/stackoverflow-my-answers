let title = document.getElementById('title');
let i = 0;

title.addEventListener('mouseover', function() {
    if (i >= 1) {
        title.innerHTML = "Hovered" + i;
        hoverText("first-SmallFont-size", "second-SmallFont-size");
        title.removeEventListener('mouseover', function() {
            alert("removed");
            title.innerHTML = "REMOVE";
        });
    } else {
        hoverText("first-Bigfont-size", "second-Bigfont-size");
        i++;
    }
});

function hoverText(small, big) {
    title.style.fontSize = "var(--" + big + ");";
    console.log("now the font size is " + big);
    setTimeout(function() {
        title.style.fontSize = "var(--" + small + ");";
        console.log("set timeout for the " + small);
    }, 1000);
}