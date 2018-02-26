var nameVar = "Laura";
// with es5, it's possible to redefine the same variable
var nameVar = "Lindsey";
console.log("nameVar", nameVar);

let nameLet = "Jen";
// es6 does not allow redefined variables, 
// but with 'let' reassignment is okay
// let nameLet = "Julie"; << not okay
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
// const does not allow redefining OR reassigning of the same variable
// const nameConst = "Gunther"; << not okay
// nameConst = "Gunther"; << not okay
console.log("nameConst", nameConst);

function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

// const and let are both block level scoped 
// as well as function level scoped.
// They are bound by blocks of code such as for-loops or for if-else statements
// var is only function level scoped

// Block scoping
const fullName = "Jen Unaeze";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

// we have access to firstname outside the if block
// if we use var in the if block above.
// We do NOT have access to firstName if we use const/let
// in the if block above.
// We can get around this by defining the variable outside the block
// and reassign it in the block. 
console.log(firstName);


// The general pattern:
// Assume all variables should be defined with const.
// If you realize you need to change the variable, use let.
// var will never be used again :D