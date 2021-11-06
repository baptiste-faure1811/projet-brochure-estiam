const express = require('express');
const router = express.Router();

const domaineController = require('../controllers/domaines');

router.get('/', domaineController.getDomaines);
router.post('/', domaineController.postDomaine);

module.exports = router;