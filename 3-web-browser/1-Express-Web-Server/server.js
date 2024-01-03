const express = require('express')
const path = require('path')

// Create the server
const server = express()

module.exports = server

// Accept URL encoded data on POST requests
server.use(express.urlencoded({ extended: false }))

// Setting up a static folder
const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

// Simple GET route
server.get('/', (req, res) => {
  res.send('<h1>Wassup!</h1>')
})

// GET route using a query string
server.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.name}!`)
})

// GET route responding with a file
server.get('/winning', (req, res) => {
  const winningPath = path.join(__dirname, 'winning.html')
  res.sendFile(winningPath)
})

// POST route
server.post('/greet', (req, res) => {
  res.redirect(`${req.body.person}`)
})

// GET route using URL params
server.get('/:name', (req, res) => {
  res.send(`Howdy, ${req.params.name}!`)
})
