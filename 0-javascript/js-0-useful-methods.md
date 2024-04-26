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