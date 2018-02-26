"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
/*
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Learn to draw</li>
      <li>Practice my coding skills</li>
    </ol>
  </div>
);
*/

/*
Andrew's challenge from section 3, Lesson 10:
1. Create your own template variable: templateTwo. Do it as a JSX expression
2. Inside templateTwo you need...
  div
    h1 -> First name
    p -> Age: Your age
    p -> Location: Your location
3. Render templateTwo instead of template. 
*/

var user = {
  name: "Laura Unaeze",
  age: 28,
  location: "Phoenix, Arizona"

  /*
  // Completing his first challenge
  var templateTwo = (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
  */

  /* Andrew's Second Challenge, Section 3 Lecture 11
  1. Create app object with two properties: title and subtitle.
     Both will be strings.
  2. Use title and subtitle in the template
  3. Render template
  */

  // Completeing his second challenge
};var challengeObj = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time."
};

var templateThree = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    challengeObj.title
  ),
  React.createElement(
    "p",
    null,
    challengeObj.subtitle
  )
);

// if statements
// ternary operators
// logical and operator


function getLocation(location) {
  // const getLocation = (location) => {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
  /* If no else statement is defined, 'return undefined' is implicitly stated.
  else {
    return undefined;
  }
  */
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

/* Andrew's fourth challenge: Section 3, Lecture 12
  1. only render the subtitle (and the p tag) if subtitle exists
     Use logical 'and' operator
  2. Conditionally render new p tag.
     If options.length > 0 -> "Here are your options"
     Else "No options"
     Use ternary operator
     (I set it to options.length > 1)
*/

// Completeing his fourth challenge
var newChallengeObj = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time.",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  newChallengeObj.subtitle && React.createElement(
    "p",
    null,
    newChallengeObj.subtitle
  ),
  React.createElement(
    "p",
    null,
    newChallengeObj.options && newChallengeObj.options.length > 1 ? "Here are your options: " + newChallengeObj.options[0] + " and " + newChallengeObj.options[1] : "There are no options."
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Learn to draw"
    ),
    React.createElement(
      "li",
      null,
      "Learn to sleep better"
    ),
    React.createElement(
      "li",
      null,
      "Practice my coding skills"
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
