# Useful Methods
These are useful methods to implement to carry out particular processes or tasks

## 'This' 
'this' in methods is used to access other properties on the same object

Example:
```js
const person = {
  first: "Robert",
  last: "Smith",
  fullName() {
    return `${this.first} ${this.last}`
  }
}
person.fullName(); //"Robert Smith"
person.last = "Plant";
person.fullName(); //"Robert Plant"
```

## .map()
- Creates a new array populated with the results of calling
- A provided function on every element in the calling array

Example: 
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doubles = numbers.map(function (num) {
    return num * 2;
})

//Turning text into uppercase
const text = ["hello", "bye", "lol", "ttyl"];

function caps(arr) {
  return arr.map(t => t.toUpperCase())
}

//or

const toCaps = text.map(function (t) {
  return t.toUpperCase();
})

// SAME OUTCOME

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

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
```

## .reduce()
- Executes a reducer function on each element of the array
- Results in a single value

Example 1 (basic summing of an array):
```js
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// note: currentValue = each element
//       accumulator = total that gets carried on
```

Example 2:
```js
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
```

Example 3 (using objects (movies in map() section)):
```js
// to get highest rated movie
const highestRated = movies.reduce((bestMovie, currMovie) => {
  if(currMovie.score > bestMovie.score) { //currMovie is each movie
    return currMovie;
  }
  return bestMovie;
})
console.log(highestRated) // returns Amadeus (movie)

```

## .filter()
- Creates a new array with all elements that pass the test
- Implement by the provided function

Example:
```js
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => { // n represents each number
  return n % 2 === 1; // if it returns true, n is added to the filtered array
}) // returns [9, 7, 5, 3, 1]
```

## .indexOf()

Example:
```js
let sentence = "what's in the sky?"
console.log(sentence.indexOf("?"))
//prints 17
"haha that is so funny!".indexOf("h")
//returns 0
//should return the index of the first letter that is specified
```

## .slice()

Example:
```js
let msg = "what is your name?"
console.log(msg.slice(5))
//prints "is your name?"

// .slice(index, endIndex)
console.log(msg.slice(5, 10))
//prints "is yo"
```

## .replace(searchValue, replaceValue)

Example:
```js
let expression = "hello how are you?"
expression.replace("hello", "hey!")
//returns "hey! how are you?"

// .splice(start, deleteCount, item1, item2, ...)-------//
// can insert and remove multiple things

```

## .sort()
- When using .sort() = it sorts the first letter
- First numerical value of each element in ascending order

Example:
```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"] 
// D, F, J, M

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
// 1, 1, 2, 3, 4

//You can sort an array of numbers in ascending or descending order

//ascending
function compareNumbers(a, b) {
  return a - b;
}
array1.sort(compareNumbers)

//descending
function compareNumbers(a, b) {
  return b - a;
}
array1.sort(compareNumbers)
```

## setTimeout()
setTimeout(handler: Timer Handler, timeout?: number,
... arguments: any[]: number)

Example:
```js
console.log("HELLOOO!!!...") //runs out immediately
setTimeout(() => {
  console.log("... are you still there?")
}, 3000) // runs after 3000 miliseconds it will call the function
```

## setInterval()

```js
const id = setInterval(() => {
  console.log(Math.random())
}, 2000); // runs every 2000 miliseconds

// you can stop it by giving it an id
clearInterval(id)
```