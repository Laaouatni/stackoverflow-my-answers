const array = ["1-2", "3-6", "4", "1-6", "4"];

const newarray = array.filter(a => !a.match(/6/g))

console.log(newarray);