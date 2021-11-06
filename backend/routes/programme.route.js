const express = require('express');
const router = express.Router();

const programmeController = require('../controllers/programmes');

router.get('/', programmeController.getProgrammes);
router.post('/', programmeController.postProgramme);

module.exports = router;