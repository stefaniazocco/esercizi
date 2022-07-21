function sumUntil(maxValue) {
 
  let somma=0;
    for (let i=0; i<=maxValue; i++){
      somma+=i;
    }


  return somma;
  
}

console.log(sumUntil(5));