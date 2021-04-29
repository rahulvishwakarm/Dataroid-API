const express = require('express');
const app = express();
const port = 8000;
const JSONData = require('./db.json')

app.post('/',(req,res) => {
  res.send(JSONData)
})

app.get('/', (req, res) => {
  res.send(JSONData);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

//Deployed on 
//https://my-json-server.typicode.com/rahulvishwakarm/Dataroid-API/industry