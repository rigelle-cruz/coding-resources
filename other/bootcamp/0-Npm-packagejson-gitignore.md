# NPM 🌐

- **Package Manager for Node.js**
- Provides JavaScript libraries, apps, and tools
- Command-Line Interface (CLI) program
- Online registry/database of code

### Scripts 🚀

- Entry points for running code from the terminal
- Execute using npm, e.g., 
    - `npm run dev`
    - `npm start`
    - `npm test`
    - `npm test testFileName`


## `package.json` 📄

- Project configuration in JSON format
- Contains:
  - Meta-data
  - Dependencies
  - Scripts
- Create using `npm init`


## `package-lock.json` 📋

- Records what is actually installed
- Contains:
  - Meta-data
  - Dependencies
  - All packages installed locally
- Generated and updated with `npm install`
- **Note**: Keeps track of the latest working version of the software


## Project Dependencies 📚

- External code you want to use in your project
- Production and Development types
- Install new dependencies: `npm install [-D] package-name`
- Re-install all dependencies using: `npm install`
- Installed to the `node_modules` folder
- **Note**: Will show in the `package.json`


## `.gitignore` 🚫

- By default, Git will save every file
- Use `.gitignore` file to ignore files and folders
- Contains names and files you want to ignore
- Example:
    - `node_modules`
    - `bundle.js` (build files)
    - Generated files
