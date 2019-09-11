var express = require('express');
const sender = require('./send');

var app = express();


app.get('/', async function (req, res) {
  console.log('befo running sender')
  result = await sender();
  console.log('result', result)
  res.send(`Hello ${result}!`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});