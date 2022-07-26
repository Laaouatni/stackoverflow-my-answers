let navItems = document.querySelectorAll('.nav-item');

document.body.style.setProperty("--total-nav-items", navItems.length);

navItems.forEach((thisItem, index) => {
  thisItem.addEventListener("click", () => {
    document.body.style.setProperty("--active-index", index);
    toogleActiveClass();
    toogleScrollBar(); 

    function toogleScrollBar() {
      let thisSection = document.querySelectorAll('#container>*')[index];
      
      let navHeight = document.querySelector('nav').offsetHeight;
      let minHeightSection = window.innerHeight - (navHeight * 2);

      if (thisSection.offsetHeight > minHeightSection) {
        document.body.style.overflowY = "scroll";
        document.querySelector(":root").style.setProperty("--nav-width", "100%");
      } else {
        document.body.style.overflowY = "hidden";
        document.querySelector(":root").style.setProperty("--nav-width", "100vw");
        window.scrollTo(0, 0);
      }
    }

    function toogleActiveClass() {
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      thisItem.classList.add('active');
    }
  });
});

