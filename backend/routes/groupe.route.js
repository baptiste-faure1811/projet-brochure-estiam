const express = require('express');
const router = express.Router();

const groupeController = require('../controllers/groupes');

router.get('/', groupeController.getGroupes);
router.get('/:groupeID', groupeController.getGroupe);
router.get('/programmeID/:programmeID', groupeController.getGroupeByProgrammeID);
router.post('/', groupeController.postGroupe);

module.exports = router;