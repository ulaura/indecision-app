// Section 4, Lecture 30 - Method Binding

// bind() is a way to fix the this-binding that gets lost when methods
// are called a certain way, such as with onClick / onSubmit event handlers.
const obj = {
  name: "Vikram",
  getName() {
    return this.name;
  }
};

// Here, there is no error. It's referencing the method in
// the object obj. 
// console.log(obj.getName());

// In this context, this is a regular function, NOT an object,
// so the 'this' loses its binding.
// const getName = obj.getName;
// console.log(getName());

// Here, we use bind and pass obj so we can fix the this-binding we lost earlier. 
// const getName = obj.getName.bind(obj); 
// console.log(getName());

// We can pass anything in bind()
const getName = obj.getName.bind({name: "Laura"});
console.log(getName());


// ***********************************************************
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

class Options extends React.Component {
  // We are overriding React's constructor method with our custom one
  // for Options. 
  // We call it with props because React calls its constructor with props
  constructor(props) {
    // Remember we call super() to pull down all the functionality
    // of React's constructor method.
    super(props);
    // we bind 'this' here so we don't have to bind it every time we use
    // this.handleRemoveAll within Options
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options)
    // alert("Remove all the options!");
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