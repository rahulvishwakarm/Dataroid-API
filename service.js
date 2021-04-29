const express = require('express');
const app = express();
const port = 8001;
const JSONData2 = require('./servicesbanner.json')
const fetch = require('node-fetch');

app.post('/srb', (req, res) => {
  res.send(JSONData2);
});

app.get('/srb', (req, res) => {
  res.send(JSONData2);
});

app.listen(port, () => console.log(`Software 2 running on port ${port}!`))

//Deployed on 
//https://my-json-server.typicode.com/rahulvishwakarm/Dataroid-API/industry