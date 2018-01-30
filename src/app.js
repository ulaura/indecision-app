console.log("App.js is running!");

// JSX - JavaScript XML
/*
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Learn to draw</li>
      <li>Practice my coding skills</li>
    </ol>
  </div>
);
*/

/*
Andrew's challenge from section 3, Lesson 10:
1. Create your own template variable: templateTwo. Do it as a JSX expression
2. Inside templateTwo you need...
  div
    h1 -> First name
    p -> Age: Your age
    p -> Location: Your location
3. Render templateTwo instead of template. 
*/

var user = {
  name: "Laura Unaeze",
  age: 28,
  location: "Phoenix, Arizona"
}

// Completing his first challenge
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);


/* Andrew's Second Challenge, Section 3 Lecture 11
1. Create app object with two properties: title and subtitle.
   Both will be strings.
2. Use title and subtitle in the template
3. Render template
*/

// Completeing his second challenge
var challengeObj = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time."
}

var templateThree = (
  <div>
    <h1>{challengeObj.title}</h1>
    <p>{challengeObj.subtitle}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);