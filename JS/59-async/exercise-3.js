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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject (new Error(`Person with id: ${id} doesn't exist`));
    }, 1000);
  });
}

// core here
fetchPersonById(1)
.then((resolve) => {
  return resolve
})
.then((resolve) => {
  console.log(JSON.parse(resolve)) 
})
.catch(error => {
  console.log(`${error.message}`)
})