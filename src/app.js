// Section 4, Lecture 29 - Events and Methods

class IndecsionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing Two", "Thing Four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
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
  // creating a method that's contained within this React class
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Andrew's challenge #1 for Section 4, Lecture 29
// Set up a Remove All button
// Set up a method handleRemoveAll -> Alert some message
// Set up onClick to fire the method
class Options extends React.Component {
  handleRemoveAll() {
    alert("Remove all the options!");
  }

  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        <button onClick={this.handleRemoveAll}>Remove All</button>
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

// Challenge #2
// 1. Set up the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> 
//    if value, then alert; if no value, do nothing
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