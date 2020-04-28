const express = require('express');
const app = express();
const port = process.env.PORT || 8100;
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
var https = require('https');

var keycertRoot = process.env == "production" ? "" : "src/secrets/https";
var privateKey  = fs.readFileSync(`${keycertRoot}/server.key`, 'utf8');
var certificate = fs.readFileSync(`${keycertRoot}/server.crt`, 'utf8');
var credentials = {key: privateKey, cert: certificate};

var api = process.env.NODE_ENV == "production" ? "https://everyday-memories-backend.herokuapp.com/" : "http://localhost:3000";
console.log(`environment: ${process.env.NODE_ENV}`);
console.log(`Routing targeting: ${api}`);
const proxy = createProxyMiddleware({
    target: "https://everyday-memories-backend.herokuapp.com",
    pathRewrite: {
        '^/api':''
    },
    logLevel: 'debug',
    changeOrigin: true
});
app.use('/api',proxy);

app.use(express.static('www'));

var staticRoot = process.env == "production" ? "/usr/src/app" : "/Users/brandoncaton/projects/Memories/frontend";
app.get('/', (req, res) => res.sendFile(`${staticRoot}/www/index.html`));
app.listen(port, () => console.log(`Frontend listening at http://localhost:${port}`));
// https.createServer(credentials,app).listen(port,()=>{console.log(`listening on ${port}`)});