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

  componentDidMount() {
    console.log("componentDidMount");

    const json = localStorage.getItem("count"); // returns null initially

    // parseInt() takes two arguements: 
    // a string, and the base you're counting in.
    const leftOff = parseInt(json, 10); // parseInt(null) returns NaN

    // This won't run if leftOff is NaN because localStorage was null.
    // This can be tested by manually changing localStorage to
    // null or even a string value and then refreshing the page. 
    // It should return count to the default 0. 
    if (!isNaN(leftOff)) {
      this.setState(() => ({ count: json }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // the only time this method will run is 
    // if prevState.count is not the same as this.state.count.
    // This prevents the RESET button from activating the method
    // when the count was already at 0 to begin with. 
    if (prevState.count !== this.state.count ) {
      localStorage.setItem("count", this.state.count);
      console.log("componentDidUpdate");
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
