var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(30);
  buffer=fs.readFileSync("index.html", "utf-8");

  response.send(buffer.toString('utf8',0 , 30);
  //response.send('yo man');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
