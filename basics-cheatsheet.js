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