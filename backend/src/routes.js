const express = require('express');
const router = express.Router();
const LoginController = require('./controllers/LoginController');
const LoginValidate = require('./middlewares/loginValidate');

router.get('/login');
router.post('/login', LoginValidate.LoginValidate, LoginController.create);

module.exports = router;