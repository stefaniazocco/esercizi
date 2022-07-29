const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values
let value= Object.values(person);

for(let i=0; i<value.length; i++){
  console.log(value[i])
}