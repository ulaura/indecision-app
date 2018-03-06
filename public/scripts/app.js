"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Section 5, Lecture 40 - The Stateless Functional Component

// These components are just as written:
// they don't have a state, they are written as a function,
// and they are components.
// These components only affect the presentation of the app and
// don't manage state data. 
// They only have a render(){return)} function when written as
// a class component.
// See below for User class example.

// Challenge for Section 5, Lecture 40
// Convert Header, Options, and Option into 
// functional stateless components

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  // props can send data from parent class to child class, but not
  // the other way around. 
  // Passing methods as props for children to use allows them to 
  // send data back up to the parent via props.

  // handleDeleteOptions lives in IndecisionApp,
  // but will be passed to and called by Options.


  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }

    // this will be passed to Action

  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var decision = this.state.options[randomNumber];

      // We are not changing the state,
      // so we don't need to use setState() here.
      return alert(decision);
    }

    // this will be passed to AddOption
    // which will send up data to the IndecisionApp when this
    // method is called

  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      // conditionals to block invalid option inputs
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }

      this.setState(function (prevState) {
        // don't use .push() here.
        // it directly alters the previous state's array
        // which we don't want to do.
        // Instead, use .concat() to return a new array
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

// class Header extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        /* Passing IndecisionApp's method handlePick as a prop in onClick */
        onClick: props.handlePick
        /* If this.props.hasOptions is false, there are no
            options in this.state.options and this button should
            be disabled */
        , disabled: !props.hasOptions
      },
      "What should I do?"
    )
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           /* Passing IndecisionApp's method handlePick as a prop in onClick */
//           onClick={this.props.handlePick}
//           /* If this.props.hasOptions is false, there are no
//               options in this.state.options and this button should
//               be disabled */
//           disabled={!this.props.hasOptions}
//         >
//             What should I do?
//         </button>
//       </div>
//     );
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    "Option: ",
    props.optionText
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Option: {this.props.optionText}
//       </div>
//     );
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  // The method for the form. Remember it has to take in an argument
  // so we can use the event so we know what was passed in with the form.
  // Even though e have a handleAddOption() in the parent component,
  // we keep this method here in AddOption as because of the extra
  // steps it needs to complete (eg preventDefault(), trim(), etc).

  // We also need a constructor method here because of the 'this'
  // and the handleAddOptions passing data.
  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

    // we need a state for this individual component
    // to track the error message
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var theOption = e.target.elements.theOption.value.trim();
      var error = this.props.handleAddOption(theOption);
      e.target.elements.theOption.value = "";

      this.setState(function () {
        return {
          // this is the same as error: error
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "theOption" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// stateless functional components follow the same naming convenction
// for React components. First letter gets capitalized.
// The function acts like a render() function, so we skip render()
// and just return the jsx. 

// Functional stateless components don't allow for 'this' because
// there is no state, so props gets passed
// directly as an argument in the function.


var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age: "
    )
  );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
