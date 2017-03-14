/* Use an ES6 Class to construct a Person instance.
 * */
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

let john = new Person('John', 'Doe');
let jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John
