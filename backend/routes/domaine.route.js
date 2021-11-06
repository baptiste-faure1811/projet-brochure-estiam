const express = require('express');
const router = express.Router();

const domaineController = require('../controllers/domaines');

router.get('/', domaineController.getDomaines);
router.get('/:domaineID', domaineController.getDomaine);
router.get('/uniteEnseignementID/:uniteEnseignementID', domaineController.getDomainesByUniteEnseignementID);
router.post('/', domaineController.postDomaine);

module.exports = router;