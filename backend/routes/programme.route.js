const express = require('express');
const router = express.Router();

const programmeController = require('../controllers/programmes');

router.get('/', programmeController.getProgrammes);
router.get('/year/:year', programmeController.getProgrammeByYear);
router.post('/', programmeController.postProgramme);

// We are routing delete paths without id to show an error
router.delete('/:deleteID', programmeController.deleteProgramme);
router.delete('/', programmeController.deleteProgramme);

module.exports = router;