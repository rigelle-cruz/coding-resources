//=========================================================================//
//------------------------------ FUNCTIONS --------------------------------// 
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

//HIGHER ORDER FUNCTIONS----------------------------------------------------//

// functions as arguments
// Example:
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHAHAHHAHAHAHAHA");
}
callTwice(laugh)

// Another Exmaple:
function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f()
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1
  console.log(roll)
}
callTwice(rollDie) //executes twice

callTenTimes(rollDie) // executes 10 times

//DEFINING FUNCTIONS--------------------------------------------------------//
// shorthand way of adding methods
// Example:
const math = {
  blah: "Hi",
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}
math.add(50, 60) //110
math.multiply(4, 2) //8

//ARROW FUNCTIONS-----------------------------------------------------------//

// compact alternative

// different ways to write the same function
// Example:
const isEvenOne = function (num) { //regular function expression
  return num % 2 === 0;
}

const isEvenTwo = (num) => { //arrow function with parens around param
  return num % 2 === 0;
}

const isEvenThree = num => { //no parens around param
  return num % 2 === 0;
}

const isEvenFour = num => ( //implicit return
  num % 2 === 0
);

const isEvenFive = num => num % 2 === 0; //one-liner implicit return

// More implicit return examples:
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b

// Example:
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))


//DEFAULT PARAMETERS--------------------------------------------------------//
 
// Example:
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1
}
// when rollDie() is called without any numbers it rolls the default no. 6

// Example:
// when a person only provides a name without a msg 
function greet(person, msg = "Hey there") {
  console.log(`${msg}, ${person}!`)
}

greet("Hellooooo!", "Bob") // Hellooooo!, Bob!
greet("Bob") // Hey there, Bob!


//SPREAD ------------------------------------------------------------------//

// expands an iterable (array, string, etc.) into a list of arguments
// takes as many arguments we want

// Example:
const numbers = [9, 3, 2, 8];
Math.max(nums); //NaN (not a number) doesn't know what to do
// Use spread ... !!!
Math.max(...nums); //67
// same as calling: Math.max(9, 3, 2, 8)

//Example:
const cats = ["blue", "scout", "rocket"];
const dogs = ["rusty", "wyatt"];

const allPets = [...cats, ...dogs]


//REST PARAMETERS ---------------------------------------------------------//

// "the rest"
// Example:
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`)
  console.log(`SILVER MEDAL GOES TO: ${silver}`)
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
