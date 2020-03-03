var app = require('./server.js');
var http = require('http');

var PORT = '3000';
app.set('port', PORT);

var server = http.createServer(app);
server.listen(PORT);
console.log(`Listening on port ${PORT}`);