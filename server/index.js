const express = require('express');
const sender = require('./send');

var bodyParser = require('body-parser');

const PORT = 3020

var cors = require('cors');
var app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json())


app.get('/', async function (req, res) {
  console.log('befor running sender', req)
  result = await sender();
  console.log('result', result)
  res.send(`Hello ${result}!`);
});

app.get('/messages', async function (req, res) {
  console.log('get/message', req)
  // TODO: get messages from rabbitMQ
  result = 'mmm'
  res.send(`Hello ${result}!`);
});

app.put('/message', async function (req, res) {
  console.log('put/message', req.body)
  const rawMessage = req.body
  result = JSON.stringify(rawMessage)
  console.log('result', result)
  // TODO: push messages from rabbitMQ
  res.send({message: result, save: 'ok'});
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
});