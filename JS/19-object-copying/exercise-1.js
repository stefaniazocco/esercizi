const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

let person2 = person1;
person2.firstName= 'Simon';

console.log(person1); //Simon
console.log(person2); //Simon

//scrivendo person2=person1 significa che le due variabili sono connesse, condividono gli stessi valori, modificando una si modifica anche l'altra



// Modifica la proprietà "firstName" di person2 in "Simon"
person1.firstName= 'John';

person2= Object.assign({}, person1);
person2.firstName= 'Simon';

console.log(person1); //John
console.log(person2); //Simon

//in questo caso è stato scritto che person2 è un oggetto a parte quindi modificando person2, l'altra variabile non cambia