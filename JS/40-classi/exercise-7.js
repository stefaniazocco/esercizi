class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName(){
    return this._firstName;
  }
  set firstName(newname){
    this._firstName = newname;
  }
  get lastName(){
    return this._lastName;
  }
  set lastName(newname){
    this._lastName = newname;
  }
  get age(){
    return this._age;
  }
  set age(newage){
    this._age = newage;
  }
  get fullName(){
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);