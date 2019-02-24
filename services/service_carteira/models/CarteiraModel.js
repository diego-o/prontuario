'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaCarteira = new Schema({
    numero: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    paciente: {
        idPaciente: {
            type: String,
            require: true
        },
        nome: {
            type: String
        },
        carteiraSus: {
            type: String
        },
        cpf: {
            type: String
        }
    }
});

module.exports = mongoose.model('Carteira', SchemaCarteira);
