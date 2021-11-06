const express = require('express');
const router = express.Router();

const groupeController = require('../controllers/groupes');

router.get('/', groupeController.getGroupes);
router.post('/', groupeController.postGroupe);

module.exports = router;