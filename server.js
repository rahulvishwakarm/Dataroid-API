const express = require('express');
const app = express();
const port = 8000;
const JSONData1 = require('./db.json')
const fetch = require('node-fetch');

app.post('/', (req, res) => {
  res.send(JSONData1);
});

app.get('/', (req, res) => {
  res.send(JSONData1);
});

app.listen(port, () => console.log(`Software 1 running on port ${port}!`))