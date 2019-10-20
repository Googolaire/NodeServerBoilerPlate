// Extra packages are nodemon (global) for update monitoring and morgan for request monitoring

// load our app server using express
const express = require('express')
const app = express()

// You must set the root and how you want to handle the request
// with a callback function of request and response (req, res)
app.get('/', (req, res) => {
  console.log('Responding to the root route')
  res.send('Hello from root')
}) 

// Making other route called users
app.get('/users', (req, res)=>{
  var user1 = {firstname: 'Hunter', lastname: 'Maxwell'}
  // Adding A second User
  const user2 = {firstname: 'Elvis', lastname: 'Presley'}
  // To pass multiple values you need to put them in an array for json
  res.json([user1, user2])
})
// Don't forget to install nodemon globally to track changes
// add the port to listen on
// Localhost:420
app.listen(420, () => {
  console.log('Dope the server is running')
})