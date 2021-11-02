const express = require('express');
const router = express.Router();

const paiementController = require('../controllers/paiement');

router.post('/', paiementController.postPaiement);
router.get('/', paiementController.getPaiements);
router.delete('/:deleteID', paiementController.deletePaiement);
router.put('/', paiementController.updatePaiement);

module.exports = router;