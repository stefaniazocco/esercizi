/*function adultFilter(persons) {
  const maggiorenni= [];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].age >= 18) {
        maggiorenni.push(persons[i]);
      }
    }
    return maggiorenni;
}*/

const maggiorenni= [];
function adultFilter(persons){
  persons.forEach(element => {
    if(element.age >= 18) {
      maggiorenni.push(element)
    }
  });
  return maggiorenni;
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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
