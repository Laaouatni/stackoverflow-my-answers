window.addEventListener("scroll", function(e) {
    if (window.scrollY > 1000) {
        document.getElementById('logo').style.display = 'none';
        document.getElementById('betaLine').textContent = "1000px THE LOGO IS HIDDEN!";
    } else {
        document.getElementById('logo').style.display = 'grid';

        /* delete this below, is only for seeing where is 1000 */
        document.getElementById('betaLine').textContent = Math.round(window.scrollY) + "px";
    }
});