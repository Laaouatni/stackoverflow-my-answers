let th = document.querySelectorAll("th");
let td = document.querySelectorAll("td");

[th, td].forEach((elAll) => {
  elAll.forEach((el) => {
    el.contentEditable = "true";
  });
});
