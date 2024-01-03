# Promises 🌟

### Synchronous (Blocking Code) ⚙️

- Code execution proceeds line by line
- Assigning values to variables
- Arithmetic operations (addition, multiplications)
- Array methods
- Creating objects

### Asynchronous (Non-blocking Code) ⏳

- File system operations (reading & writing to files)
- Network calls (HTTP Requests)
- Database queries (Create, Read, Update, Delete)

### Javascript Runtime 🚀

- Node.js
- Browser

### Async/Await Example ✨

```javascript
import fs from 'node:fs/promises'

async function getEmployees() {
  const data = await fs.readFile('employee-kiwi-saver.json', 'utf-8')
  const employees = JSON.parse(data)
  console.log(employees)
}

getEmployees()
```

### Chaining Two Promises with Async/Await ✨

```javascript
const utils = require('./utils')

async function viewContributions() {
  const alice = await utils.getContributions('Alice')
  console.log(`Alice has contributed ${alice} times`)

  const bob = await utils.getContributions('Bob')
  console.log(`Bob has contributed ${bob} times`)

  const charlie = await utils.getContributions('Charlie')
  console.log(`Charlie has contributed ${charlie} times`)
}

viewContributions()
```

### Chaining Two Promises with `.then` 🔄

- Using `.then`
- Example:

```javascript
const utils = require('./utils')

utils
  .getContributions('Alice')
  .then((contributions) => {
    console.log(`Alice has contributed ${contributions} times`)
    return utils.getContributions('Bob')
  })
  .then((contributions) => {
    console.log(`Bob has contributed ${contributions} times`)
    return utils.getContributions('Charlie')
  })
  .then((contributions) => {
    console.log(`Charlie has contributed ${contributions} times`)
  })
```