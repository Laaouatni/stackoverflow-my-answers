let inputs = document.querySelectorAll("textarea");
let langs = ["html", "css", "javascript"];

let outputs = document.querySelectorAll("code");

outputs.forEach((code, index) => {
  // ✅ make it like input 
  code.contentEditable = "true";
  // ✅ if there is some code from localStorage we add it to the website.
  code.innerHTML = localStorage.getItem(`${langs[index]}`) || "";
  // ✅ styling of your library (work great when app start)
  hljs.highlightElement(code);

  code.addEventListener("input", () => {
    // console.log("first",  code.innerHTML)
    localStorage.setItem(`${langs[index]}`, code.innerHTML);
    // ❌ why the typing is reversed here?
    // if the next line isn't there then it work fine, otherwise it will change the values to reversed
    hljs.highlightElement(code);
    // console.log("after", code.innerHTML)

    // console.log
    // example to type <div></div>
    // what I get >vid/<>vid<
  });
});
