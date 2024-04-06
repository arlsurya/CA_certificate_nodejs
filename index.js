const express = require('express');
const https = require('https'); 
const fs = require('fs');
const path = require('path');

const app = express();

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app);

app.get('/', (req, res, next) => {
    res.send('Welcome to SSL server');
});

sslServer.listen(3000, () => {
    console.log('SSL server is running on port 3000');
});
