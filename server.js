const express = require('express')
const bodyParser = require('body-parser')
const server = express();
const jsonParser = bodyParser.json();
 
server.use(express.static(__dirname));
server.use(jsonParser);
server.get('/', function (request, response) {
  console.log('server works');
  response.send('<h1>Data from server</h1>')
})
server.get('/getData', function (request, response) {
    let data = request.body;
    data.userName = 'Ivan';
    data.userAge = 25;
    response.setHeader('Content-type', 'application/json');
    response.send(JSON.stringify(data))
    console.log('send data');
  })
 
server.listen(3000)