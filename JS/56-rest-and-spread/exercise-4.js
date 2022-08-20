function sum(...num) {
  return num.reduce((uno, due) => uno + due)
}

const numbers = [1, 2, 3];
//console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers))