export default function generateXYcoords(formula, num = 10) {
  let arr = [];

  for (let x = num * -1; x < (num - 2); x++) {
    arr.push({ x, y: eval(formula) });
  }

  return arr;
}