require('dotenv').config();
const express = require('express');
const connexion = require ('./connexion');

const entrepriseRoutes = require('./routes/entreprise.route');
const programmeRoutes = require('./routes/programme.route');
const groupeRoutes = require('./routes/groupe.route');
const domaineRoutes = require('./routes/domaine.route');
const coursRoutes = require('./routes/cours.route');
const userRoutes = require('./routes/user-log-in.route');
const paiementRoutes = require('./routes/paiement.route')
const routesoffrealternance=require('./routes/alternance.route')
const certifRoutes=require('./routes/certif.routes')
const campusRoutes = require('./routes/campus.route');

const server = require('./server');

server.use(express.urlencoded({
    extended: true
}))

server.use('/api/certification',certifRoutes);
server.use('/api/entreprises', entrepriseRoutes);
server.use('/api/programmes', programmeRoutes);
server.use('/api/groupes', groupeRoutes);
server.use('/api/domaines', domaineRoutes);
server.use('/api/cours', coursRoutes);
server.use('/api/user', userRoutes);
server.use('/api/paiements', paiementRoutes);
server.use('/api/alternance',routesoffrealternance)
server.use('/api/lescampus', campusRoutes);