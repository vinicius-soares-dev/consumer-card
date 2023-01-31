const LoginValidate = (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password ) {
        res.status(400).json({ message: "Todos os campos devem ser prenchidos corretamente"});
        return next();
    }

    if(email.includes('@') == false || email.includes('.com') == false){
        res.status(401).json({ message: "O seu e-mail está inválido"});
        return next();
    }

    if(password.length < 6 || password.length > 11) {
        res.status(400).json({ message: "A sua senha deve conter entre 6 a 11 caracteres"});
        return next();
    }

    next();
}

module.exports = {
    LoginValidate,
}