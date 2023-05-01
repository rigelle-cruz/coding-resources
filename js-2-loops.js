//=========================================================================//
//--------------------------------LOOPS------------------------------------// 
//=========================================================================//

// for---------------------------------------------------------------------//

// syntax:
// for (
//   [intialExpression];
//   [condition];
//   [incrementExpression]
// )

// Example:
// start at 1, stop at 10, add 1 each time (updates the value of i)
for ( let i = 1; i <= 10; i++) {
  console.log(i);
}
// as long as the condition is true it will keep running

// Looping over arrays
// Example:
const animals = [ "lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
// 0 "lions"
// 1 "tigers"
// 2 "bears"

// Nested Loops
//Example:
for (let outer = 1; outer <= 10; outer++) {
  console.log(`outer is: ${outer}`)
  for (let inner = 1; inner < 4; inner++) {
    console.log(`     inner is: ${inner}`)
  }
}
// outer is: 1
    // inner is: 1
    // inner is: 2
    // inner is: 3
// outer is: 2
    // inner is: 1
    // inner is: 2
    // inner is: 3
// ... process runs 10 times (<= 10)


// Another Example:
const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`)
  for (let j = 0; j < row.length; j++) {
      console.log(row[j])
  }
}

// while-------------------------------------------------------------------//
// continue running as long as the test condition is true
// Example:
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}
// 0
// 1
// 2
// ...

// Another Example:
const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
  guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")

// while the guess is wrong, it still continues the loop 
// until condition is satified

// For...Of----------------------------------------------------------------//
// for (variable of iterable) {
//   statement
// }

// Example:
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}


// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// alternative version to for loop:

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }


// Iterating Objects-------------------------------------------------------//
// for...in
// Example:

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

//to create new arrays that are based on the one above using Object.values()
let total = 0;
let scores = Object.values(testScores); 
for (let score of scores) {
  total += score;
}
console.log(total / scores.length) // gets the average score 
