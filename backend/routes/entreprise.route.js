const express = require('express');
const router = express.Router();

const entrepriseController = require('../controllers/entreprises');

router.post('/', entrepriseController.postEntreprise);
router.get('/', entrepriseController.getEntreprises);
router.put('/', entrepriseController.updateEntreprise);

router.delete('/:deleteID', entrepriseController.deleteEntreprise);
// We are routing delete path without id to show an error
router.delete('/', entrepriseController.deleteEntreprise);

module.exports = router;