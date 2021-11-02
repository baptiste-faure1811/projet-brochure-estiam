const Paiement = require('../models/paiement');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getPaiements = async (req, res) => {
  const paiement = await Paiement.find();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200);
  res.send(JSON.stringify(paiement));
};

module.exports.postPaiement = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
 
    const paiement = new Paiement({
      _id: ObjectId(),
      exemple: {
        nom: req.body.exemple.nom,
        info: req.body.exemple.info
      },
      prixAnnuel: {
        titre: req.body.prixAnnuel.titre,
        prix: req.body.prixAnnuel.prix,
        details: req.body.prixAnnuel.details
      },
      fraisMobilite: {
        titre: req.body.fraisMobilite.titre,
        prix: req.body.fraisMobilite.prix,
        details: req.body.fraisMobilite.details
      },
      paiementEchelonne: {
        titre: req.body.paiementEchelonne.titre,
        prix: req.body.paiementEchelonne.prix,
        details: req.body.paiementEchelonne.details
      }
    });
    const createdPaiement = await paiement.save()
    .then(() => {
      console.log("Success")
    })
    .catch((err) => console.log(`Could not save paiement with id ${paiement._id}`, err));
};

module.exports.deletePaiement = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
    
    const id = req.params.deleteID; 
    Paiement.deleteOne({ _id: id })
    .then(() => {
      console.log("Success")
    })
    .catch((err) => console.log(`Could not delete Paiement with id ${id}`, err));
};

module.exports.updatePaiement = async (req, res) => {
};