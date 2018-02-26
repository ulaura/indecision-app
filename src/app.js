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

const user = {
  name: "Laura Unaeze",
  age: 28,
  location: "Phoenix, Arizona"
}

/*
// Completing his first challenge
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
*/

/* Andrew's Second Challenge, Section 3 Lecture 11
1. Create app object with two properties: title and subtitle.
   Both will be strings.
2. Use title and subtitle in the template
3. Render template
*/

// Completeing his second challenge
const challengeObj = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time.",
}

const templateThree = (
  <div>
    <h1>{challengeObj.title}</h1>
    <p>{challengeObj.subtitle}</p>
  </div>
);


// if statements
// ternary operators
// logical and operator


function getLocation(location) {
// const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>;
  }
  /* If no else statement is defined, 'return undefined' is implicitly stated.
  else {
    return undefined;
  }
  */
}

const templateTwo = (
  <div>
    { /* Ternary expression. If user.name (the value before ?) exists (is true), render user.name,
         else render "Anonymous" */}
    <h1>{user.name ? user.name : "Anonymous"}</h1>

    {/* Logical 'and' expression.
        Simple: If expression on left of && is true, the expression on the
                right side will render (and the left side is ignored).
                If expression on left is false, that expression will render
                (and the right side is ignored).
    */}
    {/* If user.age exists and user.age is greater than or equal to 18,
        render <p>Age: {user.age}</p>.
        If user.age doesn't exist, or user.age is under 18, render nothing.*/}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

/* Andrew's fourth challenge: Section 3, Lecture 12
  1. only render the subtitle (and the p tag) if subtitle exists
     Use logical 'and' operator
  2. Conditionally render new p tag.
     If options.length > 0 -> "Here are your options"
     Else "No options"
     Use ternary operator
     (I set it to options.length > 1)
*/

// Completeing his fourth challenge
const newChallengeObj = {
  title: "Indecision App!",
  subtitle: "Reviewing React one step at a time.",
  options: ["One", "Two"]
}

const template = (
  <div>
    <h1>Indecision App</h1>
    {newChallengeObj.subtitle && <p>{newChallengeObj.subtitle}</p>}
    <p>{(newChallengeObj.options && newChallengeObj.options.length > 1) ? 
       `Here are your options: ${newChallengeObj.options[0]} and ${newChallengeObj.options[1]}`: `There are no options.`}</p>
    <ol>
      <li>Learn to draw</li>
      <li>Learn to sleep better</li>
      <li>Practice my coding skills</li>
    </ol>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);