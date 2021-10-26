
const express = require('express');
const connexion = require ('./connexion');

const entrepriseRoutes = require('./routes/entreprise.route');

const server = require('./server');

// server.use('/', (req, res) => {
//     res.send("Hello");
// });

server.use('/entreprises', entrepriseRoutes);



