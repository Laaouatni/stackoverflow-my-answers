let div1 = document.getElementById("myDIV1");
let div2 = document.getElementById("myDIV2");

function myFunction1() {
    div1.classList.toggle("show");
    // remove the class for the second div
    div2.classList.remove("show");
}

function myFunction2() {
    div2.classList.toggle("show");
    // remove the class for the first div
    div1.classList.remove("show");
}