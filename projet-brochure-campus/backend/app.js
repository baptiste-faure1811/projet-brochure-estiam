
require('dotenv').config();
const express = require('express');
const connexion = require ('./connexion');

const campusRoutes = require('./routes/campus.route');

const server = require('./server');

server.use(express.urlencoded({
    extended: true
}))

server.use('/lescampus', campusRoutes);

