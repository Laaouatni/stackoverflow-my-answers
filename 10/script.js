const wrapper = document.querySelector(".wrapper");

const header = wrapper.querySelector("#imgPrime");

wrapper.addEventListener("mousedown", function() {
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        wrapper.position = "relative";
        wrapper.style.left = x + "px";
        wrapper.style.top = y + "px";
    };
});

document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});