console.log("App.js is running!");

const app = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time.",
  options: []
}

// e (for event) is commonly used as a parameter for form submissions
const onFormSubmit = (e) => {
  // prevrent full page refresh before form is submitted
  e.preventDefault();

  // e.target - points to the element that the event started on
  // elements - the list of elements held by the form's name 
  // in this case, name is called "option"
  // value - the value found in the input
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderThis();
  }
};

// Andrew's second challenge for this part
// Create "Remove all" button above list
// It will have an onClick handler
// which will wipe the array and rerender

const emptyArray = () => {
  app.options = [];
  renderThis();
};

const renderThis = () => {
  const template = (
    <div>
      <h1>Indecision App</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 1) ? 
         `Here are your options: ${app.options[0]} and ${app.options[1]}`: `There are no options.`}</p>
      <p>{app.options.length}</p>
      <button onClick={emptyArray}>Remove All</button>

      <ol>
        <li>Learn to draw</li>
        <li>Learn to sleep better</li>
        <li>Practice my coding skills</li>
      </ol>
  
      {/* you want to reference onFormSubmit, NOT call it as onFormSubmit()*/}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderThis();

// Andrew's first challenge for Section 3, Lecture 18

// Create a render function that renders the new jsx
// Call it right away
// Call it after options array added to it