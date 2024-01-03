const arr = ["Jared", "Daph", "Jordan", "Daniel", "Rigelle", "Robin", "Quinn"]

let output = arr
  .filter((_, index) => index > 1)
  .map(name => name.replace(name[name.length - 1], name[name.length - 1].toUpperCase()))
  .map(name => ({name, nameLength: name.length}))
  .sort((a, b) => a.nameLength - b.nameLength)[1].name[2] //accessing the character within the string

// Using teh Math.max method
// ... (spread operator) in different situations

// example 1:
let newThing = Math.max(...arr.map(name => name.length))

// example 2 (in an object: changing and adding values without fully changing the original object):
const obj = {name: "Steve", occupation: "Steveishness"}

// let newThing = {...obj, age: 27, occupation: "Uber Driver"}

