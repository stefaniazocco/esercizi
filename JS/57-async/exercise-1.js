const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    if (persons.find((person) => person.id === id)){
      resolve(persons.find((person) => person.id === id))
    } // else {
    //   reject (new Error("this id doesn't exist"))
    // }
  })
}
let uno = fetchPersonById(1);     //{ id: 1, firstName: 'Mario', lastName: 'Rossi', age: 25 }
uno
.then(console.log)              
// .catch(err =>
//   console.log("Error:", err.message))

//let quattro = fetchPersonById(4);   //Error: this id doesn't exist
// quattro
// .then(console.log)
// .catch(err =>
//   console.log("Error:", err.message))