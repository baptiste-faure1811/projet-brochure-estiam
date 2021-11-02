const Entreprise = require('../models/entreprise');

module.exports.getEntreprises = async (req, res) => {
  const entreprises = await Entreprise.find();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200);
  res.send(JSON.stringify(entreprises));
};

module.exports.postEntreprise = async (req, res) => {
    const entreprise = new Entreprise({
      name: "test1"
    });
    const createdEntreprise = await entreprise.save();
    res.status(200).json({
        entreprise: {
        ...createdEntreprise._doc,
      },
    });
};