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

let count = 0;

// for the onClick functions in templateTwo
const addOne = () => {
  console.log("addOne");
};

const minusOne = () => {
  console.log("minusOne");
};

const reset = () => {
  console.log("reset");
};


const templateTwo = (
  <div>
    {/*we still have to make a count function*/}
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>RESET</button> 
  </div>
);

// ^^^
// Andrew's Challenge for Section 3, Lecture 16
// Make button "-1" - set up minusOne function,
// register it as onClick, and log "minusOne"

// Make reset button "reset" - set up reset function,
// register it as onClick, and log "reset"

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);