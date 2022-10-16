function styleFsize() {
  const ATTR_NAME = "fsize";
  const allEl = document.querySelectorAll(`[${ATTR_NAME}]`);
  allEl.forEach(el => {
    el.style.setProperty(`--${ATTR_NAME}`, el.getAttribute(`${ATTR_NAME}`));
  })
}

styleFsize();