const express = require('express');
const router = express.Router();

const programmeController = require('../controllers/programmes');

router.get('/', programmeController.getProgrammes);
router.get('/year/:year', programmeController.getProgrammeByYear);
router.get('/:programmeID', programmeController.getProgramme);
router.post('/', programmeController.postProgramme);

// We are routing delete paths without id to show an error
router.delete('/:deleteID', programmeController.deleteProgramme);
router.delete('/', programmeController.deleteProgramme);

// We are routing put paths without id to show an error
router.put('/:updateID', programmeController.updateProgramme);
router.put('/', programmeController.updateProgramme);

module.exports = router;