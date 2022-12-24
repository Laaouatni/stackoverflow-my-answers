console.log(mathToJson("1 / 1/10 + 1/30 + 1/50"));

function mathToJson(myNumberString) {
  let resultObj = {};

  function recursion(myNumberString) {
    let myRecursiveString = myNumberString;
    while (splitFromFirstOperation(myRecursiveString).operation !== undefined) {
      myRecursiveString = splitFromFirstOperation(myRecursiveString).second;
      console.log(myRecursiveString);
    }
  }

console.log(recursion(myNumberString));

  function splitFromFirstOperation(myNumberString) {
    if (myNumberString.includes("*") || myNumberString.includes("/")) {
      return ResultArrayToObject(myNumberString.split(/(\*|\/)/));
    } else if (myNumberString.includes("+") || myNumberString.includes("-")) {
      return ResultArrayToObject(myNumberString.split(/(\+|\-)/));
    }

    function ResultArrayToObject(array) {
      let obj = {};
      obj.first = array[0];
      obj.operation = array[1];
      obj.second = array.slice(2).join("");

      console.log(obj);
      return obj;
    }
  }
}
