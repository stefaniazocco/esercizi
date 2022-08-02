const person = {
  get firstName() {
    return this._firstName;
  },
  set firstName(value) {
    this._firstName=value;
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(value) {
    this._lastName=value;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

/*Creare l'oggetto `person` e definire al suo interno i metodi getters / setters per le proprietà: `firstName` e `lastName`. 
Definire all'interno dell'oggetto anche il metodo `fullName()`
che si occupa di concatenare e restituire il nome e il cognome della persona. Infine, attraverso Object.create(), costruire due oggetti: `john` e `simon`,
assegnare ad entrambi il valore di `firstName` e `lastName` e stampare in console il nome completo*/

const john=Object.create(person);
const simon=Object.create(person);
john.firstName= "John";
john.lastName= "Doe";
simon.firstName= "Simon";
simon.lastName= "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins




