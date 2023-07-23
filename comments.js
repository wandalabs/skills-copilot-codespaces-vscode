// Create web server with Node.js
// Run with: node comments.js
// Access with: http://localhost:8080
// (c) 2016 olsn, licensed under MIT

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.html', function(err, data) {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');
