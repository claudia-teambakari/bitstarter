 
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

var fs = require('fs');
var file = fs.readFileSync('index.html', 'utf8');
  response.send(file);
  
//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
  
