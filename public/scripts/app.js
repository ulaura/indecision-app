"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Section 4, Lecture 33 - Adding State to Counter App: Part II
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

    // Andrew's challenge for Section 4, Lecture 33
    // call this.setState to decrement the count by 1

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

// // Code from Section 3, Lecture 17
// let count = 0;

// // for the onClick functions in templateTwo
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   // subtract 1 from count and rerender
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   // reset the count and rerender
//   count = 0;
//   renderCounterApp();
// };


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>RESET</button> 
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
