"use strict";

// Build It! Challenge - End of Section 3

var app = {
  buttonSwitch: ["Show Details", "Hide Details"]
};

var theButton = app.buttonSwitch[0];

var changeThis = function changeThis() {
  if (theButton === app.buttonSwitch[0]) {
    theButton = app.buttonSwitch[1];
    render();
  } else {
    theButton = app.buttonSwitch[0];
    render();
  }
  console.log("You clicked " + theButton);
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: changeThis },
      theButton
    ),
    theButton === app.buttonSwitch[0] ? null : React.createElement(
      "p",
      null,
      "Here are some details!"
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
