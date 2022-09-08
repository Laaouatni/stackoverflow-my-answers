function convert(value) {
  if (value % 1 === 0) {
    return value;
  }

  return value.toFixed(2);
}

console.log(convert(12330 / 100)); // should return value with toFixed

console.log(convert(100 / 100)); // should return 1 (no toFixed)

console.log(convert(100 / 10)); // should return 10 (no toFixed)
