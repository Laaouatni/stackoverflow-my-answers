// getting all the input available in the form
let myInput = document.querySelectorAll("input");
// for every input I will use the function inside
myInput.forEach(input => {
    // default, autocomplete will be disabled (because first time it will be empty)
    input.setAttribute("autocomplete", "off");
    // I will add event listener to every input, keyup is for when the key is pressed then released.

    input.addEventListener("keyup", function(event) {
        // getting what what <input> is typing now, so we can use it in the function
        const ActualInput = event.target;

        // if the length of the input is greater than 0, then we will be ON
        if (ActualInput.value.length > 0) {
            ActualInput.setAttribute("autocomplete", "on");
            console.log(ActualInput + " is ON"); // for debugging, delete later
        } // if the length of the input is 0, then we will be OFF and autocomplete will be disabled
        else {
            ActualInput.setAttribute("autocomplete", "off");
            console.log(ActualInput + " is OFF"); // for debugging, delete later
        }
    });
});