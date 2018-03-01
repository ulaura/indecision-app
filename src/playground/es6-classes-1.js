// Section 4, Lecture 25 - ES6 Classes: Part 2 (Sublcasses)

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

// Student is a subclass of Person. 
// It pulls in all methods from Person without having to copy/paste
// It also allows specific customization of Student w/o affecting Person
class Student extends Person {
  // Since Student is a sublcass of Person, name and age do not
  // have to be redefined in the constructor method.
  // super() calls down the parent constructor and passes it to
  // the sublcass. 
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    // the logical not operator (!) can be used twice to check if
    // something is true 
    // (note, returning this.major without (!!) would give null )
    return !!this.major;
  }

  // writing a new method getDescription overwrites
  // the one in the parent class
  getDescription() {

    // this calls down the method from the parent class
    let description = super.getDescription();

    // This modifies the method.
    // If the student has a major, getDescription() will include
    // the third string to the variable description here.
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description;
  }
}

// Andrew's challenge
// Create a subclass Traveler. It's a subclass of Person
// Add support for homeLocation. The third argument for Traveler
// Override getGreeting
// 1. If there is a home location, include it in the message
//    Example: Hi, I am Laura Unaeze. I am visiting from Phoenix
// 2. If no home location: Hi, I am Laura Unaeze

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    // remember you can skip the !! method and check truthiness
    // within the if-block 
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }

    return greeting;
  }

}

const me = new Traveler("Laura Unaeze", 28, "Phoenix");
console.log(me.getGreeting());

// the name here will be Anonymous
const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());

