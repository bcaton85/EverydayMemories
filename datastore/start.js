var app = require('./server.js');
var http = require('http');

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
console.log(`Listening on port ${port}`);