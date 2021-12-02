
/*const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ports = process.env.PORT || 3000;
app.listen(ports, console.log(`Server is running on port ${ports}`));

module.exports = app;*/

const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ports = process.env.PORT || 3000;
app.listen(ports, console.log(`Server is running on port ${ports}`));

module.exports = app;