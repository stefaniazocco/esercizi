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
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = persons.find(item => item.id === id)
      if (person){
        return resolve(person)
      }
      return reject(new Error("this id doesn't exist"))
    }, 1000)
  })
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let job = jobs.find(item => item.id === id)
      if (job){
        return resolve(job.jobTitle)
      }
      return reject(new Error("this id doesn't exist"))
    }, 500)
  })
}


Promise.race([fetchPersonById(1), fetchJobById(1)])
.then(resolve => {console.log(resolve)})
.catch(error => {
  console.log(error.message)
})