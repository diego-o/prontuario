'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaTipoAtendimento = new Schema({
    tipo: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String
    }
});

module.exports = mongoose.model('TipoAtendimento', SchemaTipoAtendimento);