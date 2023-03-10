const Login = require('../models/loginModel');

module.exports = {
    
    async read(req, res) {
        const { email } = req.body;
        const emailList = await Login.find({email: email});
       

        if(emailList.length == 0) {
            return res.json({ message: "Não existe um usuário com esse e-mail"});
        };

        return res.json(emailList);

    },

    async create(req, res) {
        const { email, password } = req.body;
        const emailList = await Login.find({email: email});

        if(emailList.length > 0) {
            return res.json({ message: "já existe um usuário com esse e-mail"});
        };

        const created = await Login.create({
            email,
            password
        });

        return res.status(200).json(created);    
    },

    async delete(req, res) {
        const { id } = req.params;

        const deleted = await Login.findOneAndDelete({ _id: id });

        if(deleted) {
           return res.status(200).json(deleted);
        }

        return res.status(400).json({ message: "não foi encontrado esse arquivo para deletar"});
    },
 

};