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