const Login = require('../models/loginModel');

module.exports = {
    
    async create(req, res) {
        const { email, password } = req.body;

        const created = await Login.create({
            email,
            password,
        });

        return res.status(200).json(created);
    }
 
 

};