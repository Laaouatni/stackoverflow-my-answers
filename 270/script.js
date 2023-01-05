const TEST1 = [25, 23.5, 100, 25, 65, 700, 10, 20];
const TEST2 = [800, 25, 910, 2, 1022, 40, 60];
const TEST3 = [25.5, 30, 80, 100, 28, 150];
const TEST4 = [25, 23.5, 10, 100, 25, 65, 700, 10, 20];

console.log(result(TEST1));
console.log(result(TEST2));
console.log(result(TEST3));
console.log(result(TEST4));

function result(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const previusNumber = parseFloat(
      result[result.length - 1] || array[i - 1] || array[i],
    );
    const thisNumber = parseFloat(array[i]);

    if (thisNumber > previusNumber) {
      result.push(thisNumber);
    } else {
      const previusString = `${previusNumber}`.split(".");
      const thisString = `${thisNumber}`.split(".");

      const floatingPart = () => {
        const summedValue = parseFloat(previusString[1]) + parseFloat(thisString[1]) || 0;

        console.log({ summedValue: summedValue })
        // if (summedValue > 100) return `${summedValue}`.split("")[1];
      };

      floatingPart();

      if (previusString[0].length > thisString[0].length) {
        let newNumber = `${previusNumber}`.split("");

        for (let i = thisString[0].length; i > 0; i--) {
          newNumber[newNumber.length - i] =
            thisString[0][thisString[0].length - i];
        }

        result.push(parseFloat(newNumber.join("") + "." + floatingPart));
      } else {
        result.push(thisNumber);
      }
    }
  }

  return result;
}
