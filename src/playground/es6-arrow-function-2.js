// Section 3, Lecture 15 - ES6 Aside: Arrow Functions Part II

// argument object - no longer bound with arrow functions

// es5 function
/*
const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

// arguments list will print with 1001,
// even though a third parameter wasn't defined in add().
console.log(add(55, 1, 1001)); 
*/

// es6 function
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

// this will throw an error because arguments is not defined
console.log(add(55, 1, 1001)); 


// 'this' keyword - no longer bound with arrow functions

const user = {
  name: "Laura",
  cities: ["Big Rapids", "Grand Rapids", "Phoenix"],
  // we have to use this syntax for the method so the 'this' here
  // can get access to name and cities.
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    /* es5
    // old workaround for issue with not accessing 'this'
    const that = this;

    this.cities.forEach(function(city) {
      // the 'this' below is not accessable, so it's assigned to undefined
      // console.log(this.name + " has lived in " + city);

      // using the workaround 'that'
      console.log(that.name + " has lived in " + city);
    });
    */

    /*
    // es6
    // the 'this' here is not bounded
    this.cities.forEach((city) => {
      console.log(this.name + " has lived in " + city);
    });
    */
    // es6 map function
    return this.cities.map((city) => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());


// Andrew's Challenge

const multiplier = {
  // numbers - array of numbers we want to multiply
  // multiplyBy - single number
  // multiply - method that will return new array where the numbers
  //            have been multiplied

  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((target) => target * this.multiplyBy);
  }

};

console.log(multiplier.multiply()); 

// example output
// [1, 2, 3] multiplied by 2 gives [2, 4, 6]