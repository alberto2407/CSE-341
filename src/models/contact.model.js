const mongoose = require('mongoose');

const Contactshema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    color: String,
    birthdate: Date
});

module.exports = mongoose.model('Contacto', Contactshema);