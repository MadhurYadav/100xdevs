// npm init -y (for node modules)

const express = require('express');
// npm install express

const app = express()
const port = 5000;

app.get('/', function(req, res){
  // res.send('Hello World!')
  res.send('<b>Hi There!<b>')
})


app.get('/route-handler', function(req, res){
  res.json({
    name: "madhur",
    age:22
  })
})
// req - headers, body, query parameters
// get - do machine learning model

app.listen(port)