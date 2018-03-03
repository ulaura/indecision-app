// Section 4, Lecture 28 - Component Props
// Props allows data to be transfered from one React component to another
class IndecsionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing Two", "Thing Four"];

    return (
      <div>
        {/* The data passed here looks like html attributes, but
            they are actually key-value pairs. 
            The key is always a string. The value can be whatever we want. 
        */}
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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Andrew's challenge for Section 4, Lecture 28. #1
// Set up an options prop for the Options component.
// We are using the Options array defined above.
// Render the lenght of the array.

// Challenge #2
// Render new p tag for each option (set text, set key)
class Options extends React.Component {
  render() {
    return (
      <div>
        {
          // What I typed for challenge #2 below
          // this.props.options.map((option) => <p key={option}>{option}</p>)
          
          // rendering it with Option class below
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
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
  render() {
    return <p>AddOption component here.</p>;
  }
}

// You can render React classes directly in ReactDOM.render()
ReactDOM.render(<IndecsionApp />, document.getElementById("app"));