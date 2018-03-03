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

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Indecision App</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options.length > 0) ? 
         `Here are your options:` : `There are no options.`}</p>
      {/* If app.options.length is 0, the 'What Should I Do?' button 
          will be disabled */}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
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

render();