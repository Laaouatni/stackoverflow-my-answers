const popups = document.querySelectorAll(".popup");

// just a simple move event, the magic is in the css
document.addEventListener("mousemove", (e) => {
  popups.forEach((popup) => {
    popup.style.left = `${e.clientX - popups[0].clientWidth / 2}px`;
    popup.style.top = `${e.clientY - popups[0].clientHeight / 2}px`;
  });
});
