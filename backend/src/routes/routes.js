const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController/LoginController');

router.get('/', loginController.Login);

module.exports = router;