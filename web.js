var express = require('express');
var buffer = new Buffer('index');
var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
buffer.write(fs.readFileSync(index.html), "utf-8");
buffer.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
