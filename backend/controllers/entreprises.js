const Entreprise = require('../models/entreprise');

module.exports.getEntreprises = async (req, res) => {
  const entreprises = await Entreprise.find();
  res.status(200).json({ entreprises });
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