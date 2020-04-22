const express = require('express');
const app = express();
const port = 8100;
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
var https = require('https');

var privateKey  = fs.readFileSync('src/secrets/https/server.key', 'utf8');
var certificate = fs.readFileSync('src/secrets/https/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// app.use(function(error, req, res, next) {
//     console.log(error); 
//     next();
// });

// app.use(function(req, res, next) {
//     console.log(req);
//     next();
// });

const proxy = createProxyMiddleware({
    target: 'http://localhost:3000',
    pathRewrite: {
        '^/api':''
    }
});
app.use('/api',proxy);

app.use(express.static('www'));


app.get('/', (req, res) => res.sendFile('/Users/brandoncaton/projects/Memories/frontend/www/index.html'));

https.createServer(credentials,app).listen(port,()=>{console.log("listening on 8100")});

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));