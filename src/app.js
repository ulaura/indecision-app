// React components are just ES6 classes that extend something defined
// in React.
// With React components, render() MUST be defined.
// Also, React components MUST be named with an uppercase first letter
// (whereas non-React ES6 classes can be named ith a lowercase first letter).
// The uppercase letter tells React it's a class and not an html element.

// This class has other classes nested inside it.
class IndecsionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
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

class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component Here.
        <Option />
      </div>
    );
  }
}

// Andrew's challenge for Section 4, Lecture 27
// Create an Option React class and render it inside Options above.
// Option -> Static text: Option Component here.
class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component Here
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