const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};


// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1

person2= Object.assign({}, person1);
person2.firstName= 'Simon';

console.log(person1); //John
console.log(person2); //Simon