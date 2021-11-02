const express = require('express');
const router = express.Router();

const entrepriseController = require('../controllers/entreprises');

router.post('/', entrepriseController.postEntreprise);
router.get('/', entrepriseController.getEntreprises);

module.exports = router;