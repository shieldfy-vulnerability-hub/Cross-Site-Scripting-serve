const handler = require('serve-handler');
const http = require('http');

// express server
const fs = require('fs')
const express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
const port = 4000

app.get('/create-file', (req, res) => {
    fs.writeFileSync(req.query.name, '')
    res.end('file created successfully')
})

app.listen(port)

// serve server
const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response);
})
 
server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});