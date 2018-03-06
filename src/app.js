// Section 4, Lecture 36 - Indecision State: Part I

class IndecsionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ["Thing One", "Thing Two", "Thing Three"]
    };
  }

  // props can send data from parent class to child class, but not
  // the other way around. 
  // Passing methods as props for children to use allows them to 
  // send data back up to the parent via props.

  // handleDeleteOptions lives in IndecisionApp,
  // but will be passed to and called by Options.
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  // Challenge for Section 4, Lecture 36
  // Create new method handlePick - pass method down to Action 
  // and set up onClick - bind here.
  // handlePick will randomly pick and option and alert it.
  // The logic already exists in jsx-indecision.js
  // Also, delete the previous handlePick method in Action

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[randomNumber];
    
    // We are not changing the state,
    // so we don't need to use setState() here.
    return alert(decision);
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        {/* will only render if there are options in the array */}
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          /* Passing IndecisionApp's method handlePick as a prop in onClick */
          onClick={this.props.handlePick}
          /* If this.props.hasOptions is false, there are no
              options in this.state.options and this button should
              be disabled */
          disabled={!this.props.hasOptions}
        >
            What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  // The method for the form. Remember it has to take in an argument
  // so we can use the event so we know what was passed in with the form.
  handleAddOption(e) {
    e.preventDefault();

    // .trim() removes leading and trailing spaces
    let theOption = e.target.elements.theOption.value.trim();

    if (theOption) {
      alert(theOption);
      e.target.elements.theOption.value = "";
    }
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="theOption"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecsionApp />, document.getElementById("app"));