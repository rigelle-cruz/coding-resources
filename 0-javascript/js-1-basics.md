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


