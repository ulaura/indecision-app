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
    render();
  }
};

// Andrew's second challenge for this part
// Create "Remove all" button above list
// It will have an onClick handler
// which will wipe the array and rerender

const emptyArray = () => {
  app.options = [];
  render();
};

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>Indecision App</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options.length > 0) ? 
         `Here are your options:` : `There are no options.`}</p>
      <p>{app.options.length}</p>
      <button onClick={emptyArray}>Remove All</button>

      <ol>
        {/* Andrew's challenge - Section 3, Lecture 19
        Map over app.opitions getting back an rray of list items
        (set key and text) */}

        {/*regular way*/}
        {/*
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
          */
        }

        {/*simplified expression way*/}
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
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

render();

// Andrew's first challenge for Section 3, Lecture 18

// Create a render function that renders the new jsx
// Call it right away
// Call it after options array added to it