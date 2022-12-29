
/* only demo, javascript isn't required (add style="height:" manually) */
const allDivs = document.querySelectorAll("div");

allDivs.forEach((div) => {
  const randomHeight = Math.floor(Math.random() * 300) + 50;
  div.style.height = `${randomHeight}px`;
})