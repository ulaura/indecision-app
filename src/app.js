// Section 5, Lecture 40 - The Stateless Functional Component

// These components are just as written:
// they don't have a state, they are written as a function,
// and they are components.
// These components only affect the presentation of the app and
// don't manage state data. 
// They only have a render(){return)} function when written as
// a class component.
// See below for User class example.

// Challenge for Section 5, Lecture 40
// Convert Header, Options, and Option into 
// functional stateless components

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
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

    this.setState((prevState) => {
      // don't use .push() here.
      // it directly alters the previous state's array
      // which we don't want to do.
      // Instead, use .concat() to return a new array
      return {
        options: prevState.options.concat(option)
      };
    });
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
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// class Header extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button 
        /* Passing IndecisionApp's method handlePick as a prop in onClick */
        onClick={props.handlePick}
        /* If this.props.hasOptions is false, there are no
            options in this.state.options and this button should
            be disabled */
        disabled={!props.hasOptions}
      >
          What should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           /* Passing IndecisionApp's method handlePick as a prop in onClick */
//           onClick={this.props.handlePick}
//           /* If this.props.hasOptions is false, there are no
//               options in this.state.options and this button should
//               be disabled */
//           disabled={!this.props.hasOptions}
//         >
//             What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option} />)
      }
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Option: {this.props.optionText}
//       </div>
//     );
//   }
// }

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

    // we need a state for this individual component
    // to track the error message
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption(e) {
    e.preventDefault();

    let theOption = e.target.elements.theOption.value.trim();
    const error = this.props.handleAddOption(theOption);
    e.target.elements.theOption.value = "";
    
    this.setState(() => {
      return {
        // this is the same as error: error
        error
      };
    });
    
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

// stateless functional components follow the same naming convenction
// for React components. First letter gets capitalized.
// The function acts like a render() function, so we skip render()
// and just return the jsx. 

// Functional stateless components don't allow for 'this' because
// there is no state, so props gets passed
// directly as an argument in the function.
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: </p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));