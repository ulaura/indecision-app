// Andrew's Challenge for Section 3, Lecture 17
// modify minusOne() and reset() to change the count
// and rerender renderCounterApp()

let count = 0;

// for the onClick functions in templateTwo
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  // subtract 1 from count and rerender
  count--;
  renderCounterApp();
};

const reset = () => {
  // reset the count and rerender
  count = 0;
  renderCounterApp();
};



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>RESET</button> 
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();