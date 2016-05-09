var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usherSchema = new Schema({
    Cedula: {
        type: Number,
        required: true,
        unique: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Apellido: {
        type: String,
        required: true
    },
    Correo: {
        type: String,
        required: true
    },
    Departamento: String,
    Ciudad: String,
    Tipo: {
        type: Number,
        required: true,
        enum: [1, 2]
    }
});

var userModel = mongoose.model('usuario', usherSchema);
module.exports = userModel;
