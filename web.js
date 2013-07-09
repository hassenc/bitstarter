var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf=fs.reafdFile('./index.html');

  response.send(buf.toString('utf8',0,20);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
