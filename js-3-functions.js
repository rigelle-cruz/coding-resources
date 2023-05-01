//=========================================================================//
//-------------------------------FUNCTIONS---------------------------------// 
//=========================================================================//

// Functions allow us to write reusable, modular code
// We define a "chunk" of code that we can then execute at a later point
// We use them ALL THE TIME

// DEFINING A FUNCTION
function funcName() {
  //do something
}
// Example:
function sayHello() {
  console.log("Hello!!");
}
sayHello() //to run the function, otherwise it won't execute it

// ARGUMENTS
// Takes inputs we pass in
// Example:
function greet(firstName) {
  console.log(`Hi, ${firstName}!`)
}

console.log(greet("Daniel")) // "Hi, Daniel!"

// with multiple arguments
//Example:
// Takes firstName and lastName but only prints out first name and the initial of lastName
function greet(firstName, lastName) {
  console.log(`Hi, ${firstName} ${lastName[0]}.`)
}

console.log(greet("Daniel", "Chefsky")) // "Hi, Daniel C."


//RETURN-------------------------------------------------------------------//
// built-in methods return values when we call them
// concrete output
// Example:
function add(x, y) {
  return x + y
}

add(5, 1)// returns 15

//FUNCTION EXPRESSIONS------------------------------------------------------//
// storing a function in a variable 
//Example:
const multiply = function (x, y) {
  return x * y;
}
multiply(5, 5) // returns 25
