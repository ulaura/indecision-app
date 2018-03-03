// Section 4, Lecture 32 - Adding State to Counter App: Part I
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    console.log("handleAddOne");
  }

  handleMinusOne() {
    console.log("handleMinusOne");
  }

  handleReset() {
    console.log("handleReset");
  }

  render(){
    return(
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>RESET</button>
      </div>
    );
  }
}

// Andrew's Challenge for Section 4, Leson 32
// Create three methods handleAddOne, handleMinusOne, handleReset
// Use console.log to print the mehtod name.
// Wire up onClick for all three buttons and bind in the constructor

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