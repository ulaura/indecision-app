// Section 4, Lecture 35 - Build It: Adding State to VisibilityToggle

// Create a component VisibilityToggle
// Three methods: render, constructor, handleToggleVisibility onClick
// state: visibility. default -> false
// At false: button text says "show details"
// At true: button text says "hide details" and the details text is shown.

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>

        {this.state.visibility && (
          <div>
            <p>Here are some details!!</p>
          </div>
        )}
      </div>
    );
  }


}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));



// // Previous code from Build It! Challenge - End of Section 3

// const app = {
//   buttonSwitch: ["Show Details", "Hide Details"]
// }

// let theButton = app.buttonSwitch[0];

// const changeThis = () => {
//   if (theButton === app.buttonSwitch[0]) {
//     theButton = app.buttonSwitch[1];
//     render();
//   }
//   else {
//     theButton = app.buttonSwitch[0];
//     render();
//   }
//   console.log(`You clicked ${theButton}`);
// };


// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
  
//       <button onClick={changeThis}>
//         {theButton}
//       </button>
//       {(theButton === app.buttonSwitch[0]) ?
//           null : <p>Here are some details!</p> }
//     </div>
//   );  
//   ReactDOM.render(template, appRoot);
// }

// render();

