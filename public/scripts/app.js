"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Section 4, Lecture 35 - Build It: Adding State to VisibilityToggle

// Create a component VisibilityToggle
// Three methods: render, constructor, handleToggleVisibility onClick
// state: visibility. default -> false
// At false: button text says "show details"
// At true: button text says "hide details" and the details text is shown.

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);

    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: "handleToggleVisibility",
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.handleToggleVisibility },
          this.state.visibility ? "Hide Details" : "Show Details"
        ),
        this.state.visibility && React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "Here are some details!!"
          )
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById("app"));

// // Previous code from Build It! Challenge - End of Section 3

// const app = {
//   buttonSwitch: ["Show Details", "Hide Details"]
// }

// let theButton = app.buttonSwitch[0];

// const changeThis = () => {
//   if (theButton === app.buttonSwitch[0]) {
//     theButton = app.buttonSwitch[1];
//     render();
//   }
//   else {
//     theButton = app.buttonSwitch[0];
//     render();
//   }
//   console.log(`You clicked ${theButton}`);
// };


// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>

//       <button onClick={changeThis}>
//         {theButton}
//       </button>
//       {(theButton === app.buttonSwitch[0]) ?
//           null : <p>Here are some details!</p> }
//     </div>
//   );  
//   ReactDOM.render(template, appRoot);
// }

// render();
