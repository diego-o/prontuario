'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaStatusAtendimento = new Schema({
    status: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String
    }
});

module.exports = mongoose.model('StatusAtendimento', SchemaStatusAtendimento);