const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();


const sslServer = http.createServer({
    key: '',
    cert: ''

}, app);

app.get('/',(req,res,next)=>{
    res.send('Welcome to SSL server')
})

sslServer.listen(3000, () => {
    console.log('ssl server is running on port 3000');
})

