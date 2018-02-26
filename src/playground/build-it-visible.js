// Build It! Challenge - End of Section 3

const app = {
  buttonSwitch: ["Show Details", "Hide Details"]
}

let theButton = app.buttonSwitch[0];

const changeThis = () => {
  if (theButton === app.buttonSwitch[0]) {
    theButton = app.buttonSwitch[1];
    render();
  }
  else {
    theButton = app.buttonSwitch[0];
    render();
  }
  console.log(`You clicked ${theButton}`);
};


const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
  
      <button onClick={changeThis}>
        {theButton}
      </button>
      {(theButton === app.buttonSwitch[0]) ?
          null : <p>Here are some details!</p> }
    </div>
  );  
  ReactDOM.render(template, appRoot);
}

render();

