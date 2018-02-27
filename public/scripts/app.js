"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Section 4, Lecture 24 - ES6 Classes: Part 1

// Andrew's challenge
// Set up constructor to take name and age (default to 0)
// create new method getDescription - Andrew Mead is 26 year(s) old.
// (So default would be Anonymous is 0 year(s) old.)

// class is a reserved word in JavaScript
var Person = function () {
  // setting name = "Anonymous" provides a default setting if one isn't given
  // constructor function is called implicitly
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    // 'this' referes to the individual instance of Person
    this.name = name;
    this.age = age;
  }

  // these methods are called explicitly as needed


  _createClass(Person, [{
    key: "getGreeting",
    value: function getGreeting() {
      // return "Hi. I am " + this.name + "!";
      return "Hi. I am " + this.name + ".";
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.name + " is " + this.age + " year(s) old.";
    }
  }]);

  return Person;
}();

var me = new Person("Laura Unaeze", 28);
// console.log(me.getGreeting());
console.log(me.getDescription());

// the name here will be Anonymous
var other = new Person();
// console.log(other.getGreeting());
console.log(other.getDescription());

var zoolander = new Person("Zoolander");
console.log(zoolander.getDescription());
