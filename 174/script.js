squeeze({
  target: document.querySelector('#container>div:nth-child(1)'),
})

function squeeze(options) {
  let lastScrollPosition;
  window.addEventListener('scroll', () => {
    let heightElement = options.target.offsetHeight;

    let scrollPosition = window.pageYOffset;

    makeFixed(options.target);
    options.target.style.height = `${heightElement - scrollPosition}px`;

    function makeFixed(element) {
      element.style.position = 'fixed';
      element.style.top = '0';
    }
    
    // function isScrollingDown() {
    //   let result = trueOrFalse();
    //   setLastScrollPosition();

    //   return result;
      
    //   function trueOrFalse() {
    //     return scrollPosition > lastScrollPosition ? true : false;
    //   }

    //   function setLastScrollPosition() {
    //     lastScrollPosition = scrollPosition;
    //   }
    // }

  });
}

