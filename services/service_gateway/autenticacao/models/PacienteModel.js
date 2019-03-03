'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaPaciente = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Paciente', SchemaPaciente);