//=========================================================================//
//------------------------  THE DOM - EVENTS  -----------------------------// 
//=========================================================================//

// EVENTS             // mouse wheel
// clicks             // double click
// drags              // copying
// drops              // pasting
// hover              // audio start
// scrolls            // screen size
// form submission    // printing
// key presses
// focus/blur

// INLINE EVENTS ----------------------------------------------------------//

// .onclick
// the user clicks on an element
// Example:
const button = document.querySelector("#idName"); // retrieves the id

button.onclick = function () { // does something when you click it
  console.log("IT CLICKED")
}

// .ondblclick
// user double-clicks on an element

// .onmouseeneter
// the pointer is moved into an element

// etc... https://www.w3schools.com/jsref/event_onmouseenter.asp


// addEventListener -------------------------------------------------------//

// Example:
const button = document.querySelector("#idName");
button.addEventListener("click", function () {
  alert("CLICKED")
})

// calling a function when an event happens

// Example:

function functionName() {
  console.log("function happens here")
}

const button = document.querySelector("#idName");

button.onclick = functionName; // runs function when clicked

// or

button.addEventListener("click", functionName)

// Example:

document.querySelector('button').addEventListener('click', function (evt) {
  console.log(evt)
}) // evt or e = event

// instead of switch you can use if, else...
window.addEventListener('keydown', function (e) {
  switch (e.code) {
      case 'ArrowUp':
          console.log("UP!");
          break;
      case 'ArrowDown':
          console.log("DOWN!");
          break;
      case 'ArrowLeft':
          console.log("LEFT!");
          break;
      case 'ArrowRight':
          console.log("RIGHT!");
          break
      default:
          console.log("IGNORED!")
  }
})

// note: window object makes it easier to control how the
//      event reacts to bubbling


// PreventDefault ---------------------------------------------------------//

// good for single page workflow
// event.preventDefault()

// Example when submitting a form:
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // to prevent the page from running default
  console.log("FORM SUBMITTED!") // stays in the same location 
});

// Form Events -----------------------------------------------------------//

// in HTML:
// <form action="/dataCollection"  => where data is sent to    
//      <input type="text"  name="username" placeholder="username">
//      <input type="text"  name="tweet" placeholder="tweet">
//      <button>Post Tweet</button>
// </form>

// in JS
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function(e) {
  e.preventDefault();
  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll("input")[1];
  // console.log(usernameInput.value, tweetInput.value)
  const usernameInput = tweetForm.elements.username.value;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value)
  usernameInput.value = "",
  tweetInput.value = "",
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
}

// note: can inspect element console.dir(tweetForm)
//      access to a property "elements"
//      shows all the elements of the form