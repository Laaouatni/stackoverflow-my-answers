let longContainer = document.getElementById('longContainer');

// is working now
longContainer.onclick = function() { console.log("click"); };

document.onscroll = function() {
    console.log("scroll");
    // click event don't work anymore because we set it to null.
    longContainer.onclick = null;
};