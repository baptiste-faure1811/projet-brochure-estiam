const express = require('express');
const router = express.Router();

const entrepriseController = require('../controllers/entreprises');

router.post('/', entrepriseController.postEntreprise);
router.get('/', entrepriseController.getEntreprises);
router.put('/', entrepriseController.updateEntreprise);

// We are routing delete paths without id to show an error
router.delete('/:deleteID', entrepriseController.deleteEntreprise);
router.delete('/', entrepriseController.deleteEntreprise);

module.exports = router;