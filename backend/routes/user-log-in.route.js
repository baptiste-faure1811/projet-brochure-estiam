const express = require('express');
const router = express.Router();

const userLogInController = require('../controllers/user-log-in');

router.post('/', userLogInController.checkUserCredentials);

module.exports = router;