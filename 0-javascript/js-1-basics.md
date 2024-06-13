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

### && (Logical AND)

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

### || (Logical OR)

Only one side needs to be true!

Example:

```js
1 !== 1 || 10 === 10 //true
10/2 === 5 || null //true
0 || undefined //false
```

Another Example:

```js
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

```

### ! (Logical NOT)

Example:
```js
false //false
!false //true
```

Another Example:
```js
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

```

## Making An Array

```js
const colors = ["red", "orange", "yellow"];
```

To make an empty array
```js
let emptyArray = []
```

Arrays are indexed like strings:
```js
colors[0]; // "red"
```

They have a length:
```js
colors.length; //3
```

Arrays within arrays:
```js
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

```

## Important Array Methods

### push(value)
Adds value to the END of an array <br>
Example:
```js
let movieLine = ["tom", "nancy"]
movieLine[2] = "pablo" //too long

//so instead use push() method:
movieLine.push('pablo')
//returns a new array ["tom", "nancy", "pablo"]

```

### pop() 
Removes and returns last value in array <br>
Example:
```js
movieLine.pop()
//returns "pablo"
```

### unshift(value)
Adds value to START of an array <br>
```js
movieLine.unshift("VIP")
//returns ["VIP", "tom", "nancy", "pablo"]
```

### shift(value)
Removes and returns first element in an array

## To make an object literal
```js
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7
}
```

All keys will be turned into strings! <br><br>

To retrieve a value:
```js
dog.age; //7
dog["age"]; //7
```

Updating values:
```js
dog.breed = "mutt";
dog["age"] = 8;
```