// Section 4, Lecture 33 - Adding State to Counter App: Part II
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // setting the default state
    this.state = {
      count: 0
    }
  }

  handleAddOne() {
    // // this adds one to count, but it does not update the state.
    // this.state.count++;
    // console.log(this.state);
  
    // To update the state, this.setState() has to be called
    // and then the specific previous state value that needs to change 
    // has to be passed as an argument to be manipulated
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  // Andrew's challenge for Section 4, Lecture 33
  // call this.setState to decrement the count by 1
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    // Because handleReset brings the count to 0 no matter what,
    // we don't care about the previous state, so we don't have
    // to pass any arguments in this.setState()
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render(){
    return(
      <div>
        {/* this.state.count accesses the value for count 
            in state we set above */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>RESET</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

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