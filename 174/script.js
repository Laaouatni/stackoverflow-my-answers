squeeze({
  /* in the target, you need to add the selector */
  target: document.querySelector('#container>div:nth-child(1)')
})

/* this is a reusable function */
function squeeze(options) {
  window.addEventListener('scroll', squeezeFunction);

  function squeezeFunction() {
    let heightElement = options.target.offsetHeight;
    let scrollPosition = window.pageYOffset;

    /* after that the height is 0, 
    the div disappear,
    and the eventlistener is removed */
    if(heightElement <= 0) {
      options.target.style.display = 'none';   
      window.removeEventListener('scroll', squeezeFunction);
    } else {
      /* every pixel scrolled, we decreased from the div */
      options.target.style.height = `${heightElement - scrollPosition}px`;
    }
  }
}

