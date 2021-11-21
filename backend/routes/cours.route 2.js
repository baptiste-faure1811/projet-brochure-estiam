const express = require('express');
const router = express.Router();

const coursController = require('../controllers/cours');

router.get('/', coursController.getCours);
router.get('/:coursID', coursController.getSingleCours);
router.get('/domaineID/:domaineID', coursController.getCoursByDomaineID);
router.post('/', coursController.postCours);

// We are routing delete paths without id to show an error
router.delete('/:deleteID', coursController.deleteCours);
router.delete('/', coursController.deleteCours);

// We are routing put paths without id to show an error
router.put('/:updateID', coursController.updateCours);
router.put('/', coursController.updateCours);

module.exports = router;