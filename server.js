const express = require('express');
const app = express();
const port = 8000;
const JSONData = require('./dbtype.json')

app.post('/',(req,res) => {
  res.send(JSONData)
})

app.get('/', (req, res) => {
  res.send(JSONData['industry']);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))