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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id){
  return new Promise((resolve, reject) => {
    let person = persons.find(item => item.id === id);
    if (person){
      return resolve(JSON.stringify(person))
    } else {
      return reject(new Error("this id doesn't exist"))
    }
  })
}
function fetchJobById(id){
  return new Promise((resolve, reject) => {
    let job = jobs.find(item => item.id === id);
    if (job){
      return resolve(JSON.stringify(job.jobTitle))
    } else {
      return reject(new Error("this id doesn't exist"))
    }
  })
}

Promise.all([fetchPersonById(1), fetchJobById(1)])
.then(results => results.map(result => JSON.parse(result)))
.then(resolve => {console.log(resolve)})
.catch(error => {
  console.log(error.message)
})

// fetchPersonById(1)
// .then((resolve) => {
//   return resolve
// })
// .then((resolve) => {
//   console.log(resolve)
// })
// .catch(error => {
//   console.log(`${error.message}`)
// })


// fetchJobById(1)
// .then((resolve) => {
//   return resolve
// })
// .then((resolve) => {
//   console.log(resolve)
// })
// .catch(error => {
//   console.log(`${error.message}`)
// })
