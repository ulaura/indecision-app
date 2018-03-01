"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Section 4, Lecture 25 - ES6 Classes: Part 2 (Sublcasses)

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

// Student is a subclass of Person. 
// It pulls in all methods from Person without having to copy/paste
// It also allows specific customization of Student w/o affecting Person


var Student = function (_Person) {
  _inherits(Student, _Person);

  // Since Student is a sublcass of Person, name and age do not
  // have to be redefined in the constructor method.
  // super() calls down the parent constructor and passes it to
  // the sublcass. 
  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: "hasMajor",
    value: function hasMajor() {
      // the logical not operator (!) can be used twice to check if
      // something is true 
      // (note, returning this.major without (!!) would give null )
      return !!this.major;
    }

    // writing a new method getDescription overwrites
    // the one in the parent class

  }, {
    key: "getDescription",
    value: function getDescription() {

      // this calls down the method from the parent class
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);

      // This modifies the method.
      // If the student has a major, getDescription() will include
      // the third string to the variable description here.
      if (this.hasMajor()) {
        description += " Their major is " + this.major + ".";
      }

      return description;
    }
  }]);

  return Student;
}(Person);

// Andrew's challenge
// Create a subclass Traveler. It's a subclass of Person
// Add support for homeLocation. The third argument for Traveler
// Override getGreeting
// 1. If there is a home location, include it in the message
//    Example: Hi, I am Laura Unaeze. I am visiting from Phoenix
// 2. If no home location: Hi, I am Laura Unaeze

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(name, age, homeLocation) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: "getGreeting",
    value: function getGreeting() {
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);

      // remember you can skip the !! method and check truthiness
      // within the if-block 
      if (this.homeLocation) {
        greeting += " I am visiting from " + this.homeLocation + ".";
      }

      return greeting;
    }
  }]);

  return Traveler;
}(Person);

var me = new Traveler("Laura Unaeze", 28, "Phoenix");
console.log(me.getGreeting());

// the name here will be Anonymous
var other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());
