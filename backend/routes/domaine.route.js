const express = require('express');
const router = express.Router();

const domaineController = require('../controllers/domaines');

router.get('/', domaineController.getDomaines);
router.get('/:domaineID', domaineController.getDomaine);
router.get('/groupeID/:groupeID', domaineController.getDomainesByGroupeID);
router.post('/', domaineController.postDomaine);

module.exports = router;