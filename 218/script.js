/* get img container */
let img = document.querySelector("#img-container");

/* get id from url */
/* if the user see the website for first time reset to 0 */
let id = getId();
changeImg();

/* button functionalities */
function next() {
  id++;
  window.location.search = `id=${id}`;
}

function prev() {
  id--;
  window.location.search = `id=${id}`;
}

/* id functionalities */
function getId() {
  let result = []; // []
  let stringArray = location.search.replace("?", "").split("&"); // ["id=number", "another=string"]

  stringArray.forEach((string) => {
    result.push(string.split("="));
  }); // [[id, number], [other, string], [another, string]

  result = Object.fromEntries(result); // {id: number, another: string}

  return result.id ?? 0; // number (or 0 if undefined)
}

function resetId() {
  window.location.search = `id=0`;
}

/* change image functionalities */
function changeImg() {
  /* if the user see all image, then we reset the id to 0 */
  let choosedImg = imgArray[id] ? imgArray[id] : resetId();

  /* changing a css variable */
  img.style.setProperty("--src", `url(${choosedImg})`);
}
