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
> greater than
< less than
>= greater than or equal to
<= less than or equal to
== equality (doesn't care about type)
```js
  1 == "1" // returns true
  1 == 1 // returns true
  ```
!= not equal
=== strict equality (cares about type)
```js
  1 === "1" // returns false
  1 === 1 // returns true 
  ```
!== strict non-equality