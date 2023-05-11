//=========================================================================//
//--------------------------------  Npm  ----------------------------------// 
//-------------------------------------------------------------------------// 
//---------------------------  package.json  ------------------------------// 
//-------------------------------------------------------------------------// 
//----------------------------  .gitignore  -------------------------------// 
//=========================================================================//

// NPM ---------------------------------------------------------------------//

// Package manager for node.js
// Provide js libraries, apps, tools
// CLI program
// Online registry/database of code


// package.json ------------------------------------------------------------//

// Project config in json format
// Contains - Meta-data, Dependencies, Scripts
// Create using      npm init

// Scripts

// Entry points for running code from terminal
// Execute using npm, eg: 
        // npm run dev
        // npm start
        // npm test
        // npm test testFileName

// package-lock.json --------------------------------------------------------//

// is a record of what is actually installed
// Contains - Meta-data, Dependencies, All package installed locally
// Generated and updated with npm install

//note: keeps track of the latest working version of our software


// Project Dependencies ----------------------------------------------------//

// External code you want to use in your project
// Production and Dev types
// Install new dependencies: npm install [-D] package-name
// Re-install all dependencies using: npm install
// Installed to node-modules folder

// note: will show in the package.json

// .gitignore --------------------------------------------------------------//

// By default, git will save every file
// Use .gitignore file to ignore files and folders
// contains names and files you want to ignore
// Example:
      // node_modules
      // bundle.js (build files)
      // Generated files