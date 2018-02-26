console.log("App.js is running!");

const newChallengeObj = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time.",
  options: ["One", "Two"]
}

const template = (
  <div>
    <h1>Indecision App</h1>
    {newChallengeObj.subtitle && <p>{newChallengeObj.subtitle}</p>}
    <p>{(newChallengeObj.options && newChallengeObj.options.length > 1) ? 
       `Here are your options: ${newChallengeObj.options[0]} and ${newChallengeObj.options[1]}`: `There are no options.`}</p>
    <ol>
      <li>Learn to draw</li>
      <li>Learn to sleep better</li>
      <li>Practice my coding skills</li>
    </ol>
  </div>
);

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

const appRoot = document.getElementById('app');

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
