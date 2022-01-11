let circle = document.getElementById('circle');
let onstop;

// on mouse move move the circle
document.addEventListener('mousemove', (e) => {
    // we restart the loop
    clearTimeout(onstop);
    // setting the dimensions of the circle
    circle.style.height = '300px';
    circle.style.width = '300px';
    // make the image move relative to the mouse (make sure that in css you applied position: relative; to the div)
    circle.style.left = e.pageX - 150 + 'px'; // 150 is half height of circle, so the cursor is in the middle
    circle.style.top = e.pageY - 150 + 'px';

    //after 0.1 seconds when the mousemove event is over, the circle will be small but not hidden :)
    onstop = setTimeout(() => {
        // setting the dimensions of the circle
        circle.style.height = '100px';
        circle.style.width = '100px';
        // make also the samller circle same position as the cursor (centered)
        circle.style.left = e.pageX - 50 + 'px'; // 50 is half height of circle, so the cursor is in the middle
        circle.style.top = e.pageY - 50 + 'px';
    }, 100);
});