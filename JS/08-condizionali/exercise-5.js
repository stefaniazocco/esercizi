function calculateAverageAge(persons) {
  const anni = [];
  for (let i=0; i<persons.length; i++){
    anni.push(persons[i].age);
  }

  let somma = 0;
  for (let i=0; i<anni.length; i++){
    somma+=anni[i];
  }
  const media= somma/anni.length;
  return media; 
}


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);