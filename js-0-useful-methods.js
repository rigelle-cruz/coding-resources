// .indexOf()--------------------------------------------//
// Example:
let sentence = "what's in the sky?"
console.log(sentence.indexOf("?"))
//prints 17
"haha that is so funny!".indexOf("h")
//returns 0
//should return the index of the first letter that is specified

// .slice()---------------------------------------------//
let msg = "what is your name?"
console.log(msg.slice(5))
//prints "is your name?"

// .slice(index, endIndex)
console.log(msg.slice(5, 10))
//prints "is yo"

// .replace(searchValue, replaceValue)------------------//
let expression = "hello how are you?"
expression.replace("hello", "hey!")
//returns "hey! how are you?"

// .splice(start, deleteCount, item1, item2, ...)-------//
// can insert and remove multiple things

// .sort()----------------------------------------------//
// when using .sort() = it sorts the first letter and first numerical value of each element in acending order
//Example:
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