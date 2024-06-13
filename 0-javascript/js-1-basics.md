# Basic Methods

## Numbers
```js
1;
-99;
0.345345;
```

## NaN = 'not a number'
```js
0/0
1 + Nan 
```

## Incrementing
```js
numberOfFriends += 3; //numberOfFriends is now 4
```

## Declaring variables with 'let'
- You can reassign or change it
```js
let numberOfFriends = 1;
```

## Declaring variables with 'const'
- Works like let but you CANNOT REASSIGN or change it!
- When you know the value will never change
```js
const minimumAge = 21;
```

## Naming Conventions
- Use upper camel-case names
```js
let numberOfChickens = 6; //GOOD

// NOT THE JS WAY:
// let number_of_chickens = 6;

```

## Strings

```js
let greeting = "Hey!"
```
or

```js
let greetingTwo = `Hello there!`
```
Adding variables within a string

```js
let greetingThree =  `${greeting} What did you say?`
console.log(greetingThree) //outcome will be "Hey! What did you say?"

```

## Indices & Length
```js
let animal = "Dumbo Octopus"
//to access a character
animal[0] //to access "D" in the string

//to find the length
animal.length
"lol".length
```

## Undefined & Null
```js
// Null
//Example:
// No one is logged in yet...
let loggedInUser = null; //value is explicitly nothing (can be set)
// A user logs in...
loggedInUser = "Alan Rickman";
```

## Booleans - true or false values
```js
true;
false;
let isHappy = true;
```

## Comparisons
> greater than <br> 
< less than <br> 
>= greater than or equal to <br> 
<= less than or equal to <br> 

== equality (doesn't care about type) 
```js
  1 == "1" // returns true
  1 == 1 // returns true
  ```
!= not equal <br> 
=== strict equality (cares about type) <br> 
```js
  1 === "1" // returns false
  1 === 1 // returns true 
  ```
!== strict non-equality 

## Logical Operators
&& <br> 
Logical AND <br> 
Example:
```js
true && true // returns true
true && false // returns false

// both parts need to be true
const writtenPassword = prompt("Enter your password");

if (writtenPassword.length >= 6 && writtenPassword.indexOf(" ") === -1){
  console.log("VALID PASSWORD")
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!")
}
```