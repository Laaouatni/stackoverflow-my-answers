let a = performance.now();

const arrayA = [
  ["1", "123", "321"],
  ["2", "456", "654"],
  ["3", "789", "987"],
  ["4", "420", "314"],
];

const arrayB = ["2", "1", "4", "3"];

const sorted = () => {
  let result = [];
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i][0] === arrayB[j]) {
        result.push(arrayA[j]);
        break;
      }
    }
  }

  return result;
};
