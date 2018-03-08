// Section 5, Lecture 53 - Removing Individual Options

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      // Class based components can have default props, too
      options: props.options
    };
  }

  // handleDeleteOptions lives in IndecisionApp,
  // but will be passed to and called by Options.
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  // this method is for deleting ONE option
  // this will be passed to Options, 
  // which will then pass it down to Option
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  // this will be passed to Action
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[randomNumber];
    
    // We are not changing the state,
    // so we don't need to use setState() here.
    return alert(decision);
  }

  // this will be passed to AddOption
  // which will send up data to the IndecisionApp when this
  // method is called
  handleAddOption(option) {
    // conditionals to block invalid option inputs
    if (!option) {
      return "Enter valid value to add item";
    }
    else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle}/>
        {/* Action will only render an available button 
            if there are options in the array */}
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// Class based components can have default props, too
IndecisionApp.defaultProps = {
  options: []
};

// A functional stateless component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Conditional rendering for the subtitle */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// default prop values for Header
// It's just an object
Header.defaultProps = {
  title: "Indeision"
}

const Action = (props) => {
  return (
    <div>
      <button 
        /* Passing IndecisionApp's method handlePick as a prop in onClick */
        onClick={props.handlePick}
        /* If props.hasOptions is false, there are no
            options in this.state.options and this button should
            be disabled */
        disabled={!props.hasOptions}
      >
          What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
      ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button 
        // writing an arrow function in onClick like this allows us to
        // access optionText with handleDeleteOption
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  // The method for the form. Remember it has to take in an argument
  // so we can use the event so we know what was passed in with the form.
  // Even though e have a handleAddOption() in the parent component,
  // we keep this method here in AddOption as because of the extra
  // steps it needs to complete (eg preventDefault(), trim(), etc).

  // We also need a constructor method here because of the 'this'
  // and the handleAddOptions passing data.
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    // We need a state for this individual component
    // to track the error message.
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption(e) {
    e.preventDefault();

    let theOption = e.target.elements.theOption.value.trim();
    const error = this.props.handleAddOption(theOption);
    e.target.elements.theOption.value = "";
    
    // { error } is the same as { error: error }
    this.setState(() => ({ error }));    
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="theOption"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

{/* We can pass in options as a prop here to override the default */}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));