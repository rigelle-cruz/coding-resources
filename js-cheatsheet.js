// Making an array----------------------------------------------------//
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// To make an object literal------------------------------------------//
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

// Conditionals-------------------------------------------------------//
// if 
// Example:
let randomNumber = Math.random();
if (randomNumber < 0.5) {
  console.log(`YOUR RANDOM NUMBER ${randomNumber} is less than 0.5!!!`);
}

// else if
// if nothing else was true, do this...
// can have as many as you want
// Example:
const dayOfWeek = "Monday";

if(dayOfWeek === "Monday") {
  console.log("UGHHH I HATE MONDAYS")
} else if (dayOfWeek === "Saturday") {
  console.log("YAY I LOVE SATURDAYS!")
}

//else
// to specify a block of code to be executed, if the same condition is false

//Nesting
//we can nest conditionals inside conditionals
// Example:
const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
  console.log("LONG ENOUGH PASSWORD!")
} 
else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters!")
}

// Password cannot include spaces
if (password.indexOf(" ") === -1) {
  console.log("Good job! No space!")
} else {
  console.log("Password cannot contain spaces!")
}

//nested version (similar) of the two conditionals above
// -1 is what we want, because we don't want spaces
if (password.length >= 6) {
  if (password.indexOf(" ") !== -1) {
    console.log("Password cannot include spaces");
  }
  else {
    console.log("Valid password!!")
  }
}
else {
  console.log("Password too short!")
}