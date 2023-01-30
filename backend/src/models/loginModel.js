const mongoose = require('mongoose');

const LoginDataSchema = new mongoose.Schema({
    email: String,
    password: Number,
});

module.exports = mongoose.model('Users', LoginDataSchema);