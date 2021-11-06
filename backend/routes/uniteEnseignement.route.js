const express = require('express');
const router = express.Router();

const uniteEnseignementController = require('../controllers/uniteEnseignement');

router.get('/', uniteEnseignementController.getUniteEnseignements);
router.post('/', uniteEnseignementController.postUniteEnseignement);

module.exports = router;