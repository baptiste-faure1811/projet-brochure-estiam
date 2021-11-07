const express = require('express');
const router = express.Router();

const programmeController = require('../controllers/programmes');

router.get('/', programmeController.getProgrammes);
router.get('/year/:year', programmeController.getProgrammeByYear);
router.post('/', programmeController.postProgramme);

module.exports = router;