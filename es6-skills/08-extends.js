/* Use ES6 class `extends` syntax to construct a Developer class with 
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */

class Person{
  constructor(firstname, lastname){
    this.fname = firstname;
    this.lname = lastname;
  }
}

class Developer extends Person {
  constructor(firstname, lastname, preferredLanguage){
    super(firstname,lastname);
    this.preferredLanguage = preferredLanguage;
  }
}
/*
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

function Developer(firstname, lastname, preferredLanguage) {
  Person.call(this, firstname, lastname);
  this.preferredLanguage = preferredLanguage;
}*/

//var jen = new Developer('Jen', 'Maker', 'Javascript');
const jen = new Developer('Jen', 'Maker', 'Javascript');

console.log(jen.fname); // 'Jen'
console.log(jen.preferredLanguage); // 'Javascript'
