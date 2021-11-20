const express = require('express');
const router = express.Router();

const groupeController = require('../controllers/groupes');

router.get('/', groupeController.getGroupes);
router.get('/:groupeID', groupeController.getGroupe);
router.get('/programmeID/:programmeID', groupeController.getGroupeByProgrammeID);
router.post('/', groupeController.postGroupe);

// We are routing delete paths without id to show an error
router.delete('/:deleteID', groupeController.deleteGroupe);
router.delete('/', groupeController.deleteGroupe);

// We are routing put paths without id to show an error
router.put('/:updateID', groupeController.updateGroupe);
router.put('/', groupeController.updateGroupe);

module.exports = router;