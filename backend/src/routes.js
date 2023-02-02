const express = require('express');
const router = express.Router();
const LoginValidate = require('./middlewares/loginValidate');
const LoginController = require('./controllers/LoginController');


router.get('/login', LoginValidate.searchValidation, LoginController.read);
router.post('/login', LoginValidate.LoginValidate, LoginController.create);
router.delete('/login/:id', LoginValidate.deleteValidation, LoginController.delete);



module.exports = router;