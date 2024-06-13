
//Incrementing--------------------------------------------------------------//
numberOfFriends += 3; //numberOfFriends is now 4

//Making variables with let-------------------------------------------------//
let numberOfFriends = 1;

// Variables with const-----------------------------------------------------//
const minimumAge = 21; //works like let but you CANNOT REASSIGN or change it!
// when you know the value will never change

//Naming Conventions--------------------------------------------------------//
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;

// Strings------------------------------------------------------------------//
let greeting = "Hey!"
//or
let greetingTwo = `Hello there!`
//adding variables within a string
let greetingThree =  `${greeting} What did you say?`
console.log(greetingThree) //outcome will be "Hey! What did you say?"

//Indices & Length----------------------------------------------------------//
let animal = "Dumbo Octopus"
//to access a character
animal[0] //to access "D" in the string

//to find the length
animal.length
"lol".length

//Undefined & Null----------------------------------------------------------//
// Null
//Example:
// No one is logged in yet...
let loggedInUser = null; //value is explicitly nothing (can be set)
// A user logs in...
loggedInUser = "Alan Rickman";

//Booleans - true or false values-------------------------------------------//
true;
false;
let isHappy = true;

//Comparisons---------------------------------------------------------------//
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equality (doesn't care about type)
  1 == "1" // returns true
  1 == 1 // returns true
// != not equal
// === strict equality (cares about type)
  1 === "1" // returns false
  1 === 1 // returns true 
// !== strict non-equality

//Logical Operators---------------------------------------------------------//
// && 
// Logical AND
// Example:
true && true // returns true
true && false // returns false

// both parts need to be true
const writtenPassword = prompt("Enter your password");

if (writtenPassword.length >= 6 && writtenPassword.indexOf(" ") === -1){
  console.log("VALID PASSWORD")
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// ||
// Logical OR
// only one side needs to be true!
// Example:
1 !== 1 || 10 === 10 //true
10/2 === 5 || null //true
0 || undefined //false

// Another Example:

//0-5 free
//5-10 $10
//10-65 $20
//65+ free

const age = prompt("Enter your age");
if ((age >= 0 && age < 5) || age >= 65) {
  console.log("FREE");
} else if (age >= 5 && age < 10) {
  console.log("$10")
} else if (age >= 10 && age < 65) {
  console.log("$20")
} else {
  console.log("INVALID AGE!")
}
//note: can add parentheses to make sure that a condition runs first

// !
// Logical NOT
// Example:
false //false
!false //true

// Another Example:
prompt("enter your first name");
if(!firstName) {
  firstName = prompt("TRY AGAIN!");
}
//note: if not something...

const num = 8;
if(!(num >= 0 && num < 5 || num >=65)) {
  console.log("YOU'RE NOT IN THE NUM RANGE!")
}
//returns "YOU'RE NOT IN THE NUM RANGE!"

// Making an array----------------------------------------------------------//
const colors = ["red", "orange", "yellow"];

// To make an empty array
// Example:
let emptyArray = []

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Arrays within arrays
// Example: 
const colourOne = ["red", "orange", "yellow"];
const colourTwo = ["black", "pink", "blue"];
const colourThree = ["violet", "white", "yellow"];

const colourSchemes = [colourOne, colourTwo, colourThree];

console.log(colourSchemes) 
//(3) [Array(3), Array(3), Array(3)]
// 0 : (3) ['red', 'orange', 'yellow']
// 1 : (3) ['black', 'pink', 'blue']
// 2 : (3) ['violet', 'white', 'yellow']
// length: 3 

// Important array methods:

//push(value) - adds value to the END of an array
// Example:
let movieLine = ["tom", "nancy"]
movieLine[2] = "pablo" //too long
//so instead use push() method:
movieLine.push('pablo')
//returns a new array ["tom", "nancy", "pablo"]

//pop() - removes and returns last value in array
// Example:
movieLine.pop()
//returns "pablo"

//unshift(val) - adds value to START of an array
movieLine.unshift("VIP")
//returns ["VIP", "tom", "nancy", "pablo"]

//shift() - removes and returns first element in an array

// To make an object literal------------------------------------------------//
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

// Nesting Arrays & Objects-------------------------------------------------//
// arrays and objects usually go along side each other
// Example:
const comments = [
  {username: "Tammy", text: "lolololol", votes: 9},
  {username:"FishBoi", text: "glob glob", votes: 12378}
]

// To access 
// Example:
comments[1].text // "glob glob"

// Conditionals-------------------------------------------------------------//
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