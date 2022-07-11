var navbar = document.getElementById("navbarNav");

function hideShow() {
    console.log("click")
  if (navbar.style.display == "block") {
    navbar.style.display = "none";
    console.log("disapper")
  } else {
    navbar.style.display = "block";
    console.log("visible")
  }
}