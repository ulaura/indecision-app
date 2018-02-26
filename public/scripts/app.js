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

// Andrew's Challenge for Section 3, Lecture 17
// modify minusOne() and reset() to change the count
// and rerender renderCounterApp()

var count = 0;

// for the onClick functions in templateTwo
var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  // subtract 1 from count and rerender
  count--;
  renderCounterApp();
};

var reset = function reset() {
  // reset the count and rerender
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
