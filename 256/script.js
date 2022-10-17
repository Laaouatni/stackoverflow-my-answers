const data = {
  stories: [
    {
      id: 0,
      title: "Puss In Boots",
      subtitle: "",
    },
    {
      id: 1,
      title: "Aladdin",
      subtitle: "",
    },
    {
      id: 2,
      title: "Sleeping Beauty",
      subtitle: "",
    },
    {
      id: 3,
      title: "Puppy Dreams",
      subtitle: "",
    },
  ],
};

const card = document.getElementById("card");

setText(data, card);

function setText(data, element = document.body) {// element if there isn't then we get the body instead
  const id = getIdFromURL(); // if url is ?id=2 then it will return 2
  const base = data.stories; // change this if the structure is different or changed.
  
  element.textContent = base[id].title;
}

function getIdFromURL() {
  let result = []; // []
  const stringArray = location.search.substring(1).split("&"); // ["id=number", "another=string"]

  stringArray.forEach((string) => {
    result.push(string.split("="));
  }); // [[id, number], [other, string], [another, string]

  result = Object.fromEntries(result); // {id: number, another: string}

  return result.id ?? 0; // number (or 0 if undefined)
}
