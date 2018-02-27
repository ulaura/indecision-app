// Section 4, Lecture 24 - ES6 Classes: Part 1

// Andrew's challenge
// Set up constructor to take name and age (default to 0)
// create new method getDescription - Andrew Mead is 26 year(s) old.
// (So default would be Anonymous is 0 year(s) old.)

// class is a reserved word in JavaScript
class Person {
  // setting name = "Anonymous" provides a default setting if one isn't given
  // constructor function is called implicitly
  constructor(name = "Anonymous", age = 0) {
    // 'this' referes to the individual instance of Person
    this.name = name;
    this.age = age;
  }

  // these methods are called explicitly as needed
  getGreeting() {
    // return "Hi. I am " + this.name + "!";
    return `Hi. I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Laura Unaeze", 28);
// console.log(me.getGreeting());
console.log(me.getDescription());

// the name here will be Anonymous
const other = new Person();
// console.log(other.getGreeting());
console.log(other.getDescription());

const zoolander = new Person("Zoolander");
console.log(zoolander.getDescription());



