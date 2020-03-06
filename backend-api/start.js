var app = require('./server.js');
var http = require('http');
var db = require('./mongo');

var PORT = '3000';
app.set('port', PORT);

// TODO: Add retry logic for connection
db.connect(()=>{
    var server = http.createServer(app);
    server.listen(PORT);
    console.log(`Listening on port ${PORT}`);
});