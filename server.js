const express = require('express');
const app = express();
const port = 8000;
const JSONData = require('./db.json')
const fetch = require('node-fetch');

app.post('/',(req,res) => {
  res.send(JSONData)
})

app.get('/', (req, res) => {
  res.send(JSONData);
});

fetch('https://my-json-server.typicode.com/rahulvishwakarm/Dataroid-API/db')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log(json['industry']);
        console.log(json['industry'][0]['industrial15']);
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

//Deployed on 
//https://my-json-server.typicode.com/rahulvishwakarm/Dataroid-API/industry