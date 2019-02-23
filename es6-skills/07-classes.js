/* Use an ES6 Class to construct a Person instance.
 * */

class Person{
  constructor(firstname, lastname){
    this.fname = firstname;
    this.lname = lastname;
  }
}
/*function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}*/

//var john = new Person('John', 'Doe');
//var jack = new Person('Jack', 'Doe');

const john = new Person('John', 'Doe');
const jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John
