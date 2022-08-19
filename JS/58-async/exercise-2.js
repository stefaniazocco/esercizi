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
      if(persons.find(item => item.id === id)){
        resolve(persons.find(item => item.id === id));
      } else{
        reject (new Error("this id doesn't exist"))
      }
    }, 1000)
  });
}

fetchPersonById(4)        //Error: this id doesn't exist
.then((person) => console.log(person))
.catch(err => console.log("Error:", err.message));
