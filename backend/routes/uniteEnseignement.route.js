const express = require('express');
const router = express.Router();

const uniteEnseignementController = require('../controllers/uniteEnseignements');

router.get('/', uniteEnseignementController.getUniteEnseignements);
router.get('/:uniteID', uniteEnseignementController.getUniteEnseignement);
router.get('/groupeID/:groupeID', uniteEnseignementController.getUniteEnseignementsByGroupeID);
router.post('/', uniteEnseignementController.postUniteEnseignement);

module.exports = router;