const express = require('express');
const router = express.Router();

const campusController = require('../controllers/lescampus');

router.post('/', campusController.postCampus);

router.get('/', campusController.getLescampus);

router.delete('/:deleteID', campusController.deleteCampus);

router.put('/', campusController.updateCampus);

module.exports = router;