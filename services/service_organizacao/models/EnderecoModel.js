'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaEndereco = new Schema({
    cep: {
        type: String,
        max: 8,
        required: true
    },
    logradouro: {
        type: String,
        required: true,
        max: 150
    },
    numero: {
        type: String,
        max: 20
    },
    bairro: {
        type: String,
        required: true,
        max: 100
    },
    municipio: {
        type: String,
        required: true,
        max: 100
    },
    uf: {
        type: String,
        required: true,
        max: 2
    }
});

exports.SchemaEndereco = SchemaEndereco;