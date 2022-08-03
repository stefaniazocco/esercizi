function memoize(fn) {
  let cache = {};
  return (num) => {
    console.log(`Controllo cache per numero: ${num}`);
    if (num in cache) {
      return (`Numero ${num} già  presente nella cache, fattoriale: ${cache[num]}`);
    }
    else {
      const newfactorial= fn(num);
      cache[num] = fn(num);
      return (`Numero ${num} non presente, fattoriale: ${newfactorial}`)
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

const fattoriale = memoize(factorial); //factorial = memoize(factorial)
console.log(fattoriale(10));
console.log(fattoriale(5));
console.log(fattoriale(6));
console.log(fattoriale(12));
console.log(fattoriale(5));