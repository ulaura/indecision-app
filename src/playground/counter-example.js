// Challenge for Section 5, Lecture 41
// count - set up default prop value to 0

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // setting the default state
    this.state = {
      count: props.count
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

Counter.defaultProps = {
  count: 0
}

{/* We can pass in count here as props to override the default */}
ReactDOM.render(<Counter count={1000}/>, document.getElementById("app"));
