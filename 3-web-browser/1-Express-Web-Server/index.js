const express = require('express')

const server = express()

//Setting up a static folder
//So now, you can do http://localhost:3000/[any file in the static folder]
//e.g. if you have a file called 'greet.html', you can do http://localhost:3000/greet.html
const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/', (req, res) => {
  res.send('HELLOOO!!')
})

server.get('/:hello', (req, res) => {
  res.send(`Hello, ${req.query.name}!`)
})

//GET route using a query string
// query string http://localhost:3000/hello?name=rigelle 

server.get('/:name', (req, res) => {
  res.send(`HIIIII, ${req.params.name}!`)
})

//GET route using URL params
server.get('/winning', (req, res) => {
  const winningPath = path.join(__dirname, 'winning.html')
  res.sendFile(winningPath)
})

//Making the server listen on port 3000
const port = 3000
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})

//--------------- POST REQUESTS -----------------//

//Allow server to accept URL-encoded data (needed to make the form work for the POST request)
server.use(express.urlencoded({ extended: false }))

//When you press submit on the form, it will show 'wassup [name]' on the page.
//However, when you press refrehs you get 'Confirm Form Resubmission', which isn't a good user experience.

server.post('/greet', (req, res) => {
 res.send(`wassup, ${req.body.person}`)
})