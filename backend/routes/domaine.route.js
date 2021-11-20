const express = require('express');
const router = express.Router();

const domaineController = require('../controllers/domaines');

router.get('/', domaineController.getDomaines);
router.get('/:domaineID', domaineController.getDomaine);
router.get('/groupeID/:groupeID', domaineController.getDomainesByGroupeID);
router.post('/', domaineController.postDomaine);

// We are routing delete paths without id to show an error
router.delete('/:deleteID', domaineController.deleteDomaine);
router.delete('/', domaineController.deleteDomaine);

module.exports = router;