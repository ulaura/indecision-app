// React components are just ES6 classes that extend something defined
// in React.
// With React components, render() MUST be defined.
// Also, React components MUST be named with an uppercase first letter
// (whereas non-React ES6 classes can be named ith a lowercase first letter).
// The uppercase letter tells React it's a class and not an html element.
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

// Andrew's challenge
// Create two more React components
// 1. Options - Static text: Options component here
// 2. AddOption -> Static text: AddOption component here

class Options extends React.Component {
  render() {
    return <p>Options component here.</p>;
  }
}

class AddOption extends React.Component {
  render() {
    return <p>AddOption component here.</p>;
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />

  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));