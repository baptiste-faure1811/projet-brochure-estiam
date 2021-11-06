const express = require('express');
const router = express.Router();

const coursController = require('../controllers/cours');

router.get('/', coursController.getCours);
router.get('/:coursID', coursController.getSingleCours);
router.get('/domaineID/:domaineID', coursController.getCoursByDomaineID);
router.post('/', coursController.postCours);

module.exports = router;