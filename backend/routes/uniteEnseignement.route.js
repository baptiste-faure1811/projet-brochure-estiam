const express = require('express');
const router = express.Router();

const uniteEnseignementController = require('../controllers/uniteEnseignements');

router.get('/', uniteEnseignementController.getUniteEnseignements);
router.post('/', uniteEnseignementController.postUniteEnseignement);

module.exports = router;