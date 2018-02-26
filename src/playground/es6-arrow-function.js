// Section 3, Lecture 14 - ES6 Arrow Functions

/* es5 function
const square = function(x) {
  return x * x;
};
*/

// es5 function, version 2 (See note below)
function square(x) {
  return x * x;
};

console.log(square(3));

// es6 function - verbose
// notice that the 'function' keyword is now gone
/*
const squareArrow = (x) => {
  return x * x;
};
*/

// es6 function - expression/shorthand
// You can use this expression syntax if the function only returns
// a single expression. Here, the expression is implicitly being returned.
const squareArrow = (x) => x * x;


console.log(squareArrow(4));

// Why we were able to get away with this set up in es5
// function someName() {}
// in es5, functions could be named, getting rid of the need
// to set it up as var someName = function().
// It would be like naming it var someName = function someName():
// but then getting rid of the var someName part.

// in es6, all functions are anonymous.
// You can't do that. All functions ave to be assigned to a variable.


// Andrew's Challenge 
// Use arrow functions for the function getFirstName
// using the fullName if block from es6-let-const.js

// First, create an arrow function using verbose syntax
// Second, create an arrow function using expression/shorthand syntax
// Goal: getFirstName("Laura Unaeze") -> "Laura"


// verbose
// const getFirstName = (fullName) => {
//   return fullName.split(" ")[0];
// };

// expression
const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Laura Unaeze"));