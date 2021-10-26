require('dotenv').config();
const express = require('express');
//const http = require('http');

const app = express();

const ports = process.env.PORT || 3000;
app.listen(ports, console.log(`Server is running on port ${ports}`));

//app.set('port',ports);

//const server = http.createServer(app)
//server.listen(ports);


module.exports = app;