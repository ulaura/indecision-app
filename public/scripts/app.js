"use strict";

console.log("App.js is running!");

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

var count = 0;

// for the onClick functions in templateTwo
var addOne = function addOne() {
  console.log("addOne");
};

var minusOne = function minusOne() {
  console.log("minusOne");
};

var reset = function reset() {
  console.log("reset");
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "RESET"
  )
);

// ^^^
// Andrew's Challenge for Section 3, Lecture 16
// Make button "-1" - set up minusOne function,
// register it as onClick, and log "minusOne"

// Make reset button "reset" - set up reset function,
// register it as onClick, and log "reset"

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
