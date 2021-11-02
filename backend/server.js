require('dotenv').config();
const express = require('express');

const app = express();

const ports = process.env.PORT || 3000;
app.listen(ports, console.log(`Server is running on port ${ports}`));

module.exports = app;