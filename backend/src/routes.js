const express = require('express');
const router = express.Router();
const LoginController = require('./controllers/LoginController');

router.get('/login', LoginController.Login);

module.exports = router;