
require('dotenv').config();
const express = require('express');
const connexion = require ('./connexion');

const entrepriseRoutes = require('./routes/entreprise.route');
const programmeRoutes = require('./routes/programme.route');
const groupeRoutes = require('./routes/groupe.route');
const uniteEnseignementRoutes = require('./routes/uniteEnseignement.route');
const domaineRoutes = require('./routes/domaine.route');
const coursRoutes = require('./routes/cours.route');

const server = require('./server');

server.use(express.urlencoded({
    extended: true
}))

server.use('/entreprises', entrepriseRoutes);
server.use('/programmes', programmeRoutes);
server.use('/groupes', groupeRoutes);
server.use('/uniteEnseignements', uniteEnseignementRoutes);
server.use('/domaines', domaineRoutes);
server.use('/cours', coursRoutes);

