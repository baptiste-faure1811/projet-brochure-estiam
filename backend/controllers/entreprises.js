const Entreprise = require('../models/entreprise');

module.exports.getEntreprises = async (req, res) => {
  const entreprises = await Entreprise.find();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200);
  res.send(JSON.stringify(entreprises));
};

module.exports.postEntreprise = async (req, res) => {
    //const name = req.body.name;
  
    console.log("REQ: " + req);
    const entreprise = new Entreprise({
      name: req.body.name
    });
    const createdEntreprise = await entreprise.save();
    // Header set Access-Control-Allow-Origin "*"
    res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    //res.status(200);

    res.send(JSON.stringify(entreprises));
    res.status(200).json({
        entreprise: {
        ...createdEntreprise._doc,
      },
    });
};