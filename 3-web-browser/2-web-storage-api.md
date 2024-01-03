# Web Storage API 💾

## localStorage


- The localStorage API is a built-in tool in web browsers that lets developers save information, so it can be stored and used again later. It's like a web browser's memory bank, where websites can put things for safekeeping and get them back whenever they need.

- Read-only property of the window interface 

- NO expiration time

- In the example below, you can leverage localStorage to save state information, acting like a cache in the user's browser.

```javascript
// In this example, the user can insert a new product.
// This function retains a memory of the information they were going to include when uploading a new product.

const saveToLocalStorage = (state: UpsertProduct) => {
  localStorage.setItem('newProduct', JSON.stringify(state));
}
```
