const express = require('express');
const router = express.Router();

const coursController = require('../controllers/cours');

router.get('/', coursController.getCours);
router.post('/', coursController.postCours);

module.exports = router;