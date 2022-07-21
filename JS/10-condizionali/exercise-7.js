function sumUntil(maxValue) {
  // crea array con numeri da 1 a maxValue
  const numeri = [];
    for (let i=1; i<=maxValue; i++){
      numeri.push(i);
    }


//somma i numeri nell'array
  let somma=0;
    for (let i=0; i<numeri.length; i++){
      somma+=numeri[i];
    }


  return somma;
  
}

console.log(sumUntil(5));