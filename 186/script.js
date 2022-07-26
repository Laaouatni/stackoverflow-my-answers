let navItems = document.querySelectorAll('.nav-item');

document.body.style.setProperty("--total-nav-items", navItems.length);

navItems.forEach((thisItem, index) => {
  thisItem.addEventListener("click", () => {
    document.body.style.setProperty("--active-index", index);
    toogleScrollBar();

    function toogleScrollBar() {
      let navHeight = document.querySelector('nav').offsetHeight;
      
      let thisSection = document.querySelectorAll('#container>*')[index];
      let minHeightSection = window.innerHeight - (navHeight * 2);

      if(thisSection.offsetHeight > minHeightSection) {
        document.body.style.overflowY = "auto"
        document.querySelector(":root").style.setProperty("--nav-width", "100%");
        console.log("big")
      } else {
        document.body.style.overflowY = "hidden";
        document.querySelector(":root").style.setProperty("--nav-width", "100vw");
        console.log("small")
      }
    }
  });
});

