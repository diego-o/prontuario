'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaVacina = new Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Vacina', SchemaVacina);
