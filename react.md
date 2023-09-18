# REACT

### Local Storage

- You can save state to local storage
- Like cache in browser
```
// in this example user can insert a new product
// retains a memory of the written info they were going to include when uploading a new product

const saveToLocalStorage = (state: UpsertProduct) => {
    localStorage.setItem('newProduct', JSON.stringify(state))
  }
```
