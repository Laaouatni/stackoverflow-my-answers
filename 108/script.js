let circle = document.getElementById('circle');

// on mouse move move the circle
document.addEventListener('mousemove', (e) => {
    // make the image move relative to the mouse (make sure that in css you applied position: relative; to the div)
    circle.style.left = e.pageX - 100 + 'px'; // 100 is half height of circle, so the cursor is in the middle
    circle.style.top = e.pageY - 100 + 'px';
});