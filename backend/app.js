
require('dotenv').config();
const express = require('express');
const connexion = require ('./connexion');

const entrepriseRoutes = require('./routes/entreprise.route');

const server = require('./server');

server.use(express.urlencoded({
    extended: true
}))

server.use('/entreprises', entrepriseRoutes);

