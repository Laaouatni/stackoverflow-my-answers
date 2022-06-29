let colorsArray = ["ffc", "fb9", "bfc", "fcc"]; // change this line... don't put "#" in the beginning (js automatically adding it)
let finalColor = "0d1117"; // your final color, don't put "#" in the beginning (js automatically adding it)

/* Don't change the lines below */

/* for every color we are adding this logic below */
colorsArray.forEach((color) => {
    /* getting all the html elements with the same color */
    let tdWithColor = document.querySelectorAll(`td[style*="background-color: #${color}"]`);

    /* if there is more than one td of the same color we are coloring it too */
    tdWithColor.forEach((element) => {
        element.style = `background-color: #${finalColor}`;
    })
});