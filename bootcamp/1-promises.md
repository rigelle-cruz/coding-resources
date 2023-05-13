## Promises 


### Synchronous (blocking code)

- A line of code must be read and executed before another line is read
- Assigning values to variables
- Arithmetic operations (addition, multiplications)
- Array methods
- Creating objects


### Asynchronous (non-blocking code)

- File system (reading & writing to files)
- Network calls (HTTP Requests)
- Database queries (Create, Read, Update, Delete)


### Javascript runtime

- Node.js
- Browser


### async/await

- Example:

```javascript

import fs from 'node:fs/promises'

async function getEmployees() {
  const data = await fs.readFile('employee-kiwi-saver.json', 'utf-8')
  const employees = JSON.parse(data) // 
  console.log(employees)
}

getEmployees()

```

### Chaining two promises with async/await

- Example: 

```javascript

const utils = require('./utils')

// asyn/await is a syntactic sugar for promises
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

### Chaining two promises with ```.then```

- Using ```.then```
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