var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  var buffer = new Buffer(fs.readFileSync('index.html'));
  var index_html = buffer.toString();
  response.send(index_html);
  res.write(fs.readFileSync(__dirname + path, 'utf8'));
});

app.get('/whereami', function(request, response) {
  var buffer = new Buffer(fs.readFileSync('whereami.html'));
  var html_file = buffer.toString();
  response.send(html_file);
  res.write(fs.readFileSync(__dirname + path, 'utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});