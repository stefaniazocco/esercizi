const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person.address?.city); // undefined
console.log(person.fullName?.()); // undefined