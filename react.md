# REACT

### Local Storage

- You can save state to local storage
- Like cache in browser

javascript```
const saveToLocalStorage = (state: UpsertProduct) => {
    localStorage.setItem('newProduct', JSON.stringify(state))
  }
```
