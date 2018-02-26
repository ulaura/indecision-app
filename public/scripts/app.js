"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time.",
  options: []

  // e (for event) is commonly used as a parameter for form submissions
};var onFormSubmit = function onFormSubmit(e) {
  // prevrent full page refresh before form is submitted
  e.preventDefault();

  // e.target - points to the element that the event started on
  // elements - the list of elements held by the form's name 
  // in this case, name is called "option"
  // value - the value found in the input
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderThis();
  }
};

// Andrew's second challenge for this part
// Create "Remove all" button above list
// It will have an onClick handler
// which will wipe the array and rerender

var emptyArray = function emptyArray() {
  app.options = [];
  renderThis();
};

var renderThis = function renderThis() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Indecision App"
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options && app.options.length > 1 ? "Here are your options: " + app.options[0] + " and " + app.options[1] : "There are no options."
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: emptyArray },
      "Remove All"
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderThis();

// Andrew's first challenge for Section 3, Lecture 18

// Create a render function that renders the new jsx
// Call it right away
// Call it after options array added to it
