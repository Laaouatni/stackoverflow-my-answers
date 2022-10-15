let multiArr = [
  ["r", "s", "p"],
  ["w", "u", "i"],
  ["a", "t", "g"],
];

function toObject(arr) {
  let output = {}

  // child array => object
  arr.forEach((child, i) => {
    output[i] = {...child} // Destructuring assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  })

  return output;
}

console.log(
  toObject(multiArr)
);
