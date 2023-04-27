// Numbers------------------------------------------------------------------//
1;
-99;
0.345345;

//NaN = 'not a number'
0/0
1 + Nan 

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
const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(" ") === -1){
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