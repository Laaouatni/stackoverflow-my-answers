let title = document.getElementById('title');
let i = 0;

title.addEventListener('mouseover', function() {
    if (i >= 1) {
        title.innerHTML = "Hovered" + i;
        hoverText(5, 6);
        title.removeEventListener('mouseover', function() {
            alert("removed");
            title.innerHTML = "REMOVE";
        });
    } else {
        hoverText(12.5, 13.5);
        i++;
    }
});

function hoverText(small, big) {
    title.style.fontSize = big + "rem";
    console.log("now the font size is " + big);
    setTimeout(function() {
        title.style.fontSize = small + "rem";
        console.log("set timeout for the " + small);
    }, 1000);
}