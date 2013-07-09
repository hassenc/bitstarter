var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(20);
  buffer.write(fs.reafdFile('./index.html'));

  response.send(buffer.toString('utf8',0,20);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
