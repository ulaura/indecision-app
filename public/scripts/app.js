"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Section 5, Lecture 46 - Saving and Loading the Count

// This whole part is a challenge:
// Use localStorage and lifecycle methods to add data persistence
// to counter-example.

// The user should be able to count up and down like normal,
// but also be able to refresh or close the tab (not the window), 
// reopen the tab, and pick up right where they left off.

// Note: We don't need to use JSON.stringfy() or JSON.parse() here,
// but the numbers will be returned as strings, which will cause errors
// if we don't conver them back to numbers properly. 

// Use parseInt() to convert back to a number.
// "NaN" means Not a Number. This will be returned if you're trying to
// use strings in math functions, etc.
// isNaN() checks if it's a number or not. true = not number, false = is number.


var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);

    // setting the default state
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount");

      var json = localStorage.getItem("count"); // returns null initially

      // parseInt() takes two arguements: 
      // a string, and the base you're counting in.
      var leftOff = parseInt(json, 10); // parseInt(null) returns NaN

      // This won't run if leftOff is NaN because localStorage was null.
      // This can be tested by manually changing localStorage to
      // null or even a string value and then refreshing the page. 
      // It should return count to the default 0. 
      if (!isNaN(leftOff)) {
        this.setState(function () {
          return { count: json };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // the only time this method will run is 
      // if prevState.count is not the same as this.state.count.
      // This prevents the RESET button from activating the method
      // when the count was already at 0 to begin with. 
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
        console.log("componentDidUpdate");
      }
    }
  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      // // this adds one to count, but it does not update the state.
      // this.state.count++;
      // console.log(this.state);

      // To update the state, this.setState() has to be called
      // and then the specific previous state value that needs to change 
      // has to be passed as an argument to be manipulated
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      // Because handleReset brings the count to 0 no matter what,
      // we don't care about the previous state, so we don't have
      // to pass any arguments in this.setState()
      this.setState(function () {
        return {
          count: 0
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
          "Count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleMinusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "RESET"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
