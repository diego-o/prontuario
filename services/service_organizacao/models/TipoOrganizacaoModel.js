'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoOrganizacaoSchema = new Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('TipoOrganizacao', TipoOrganizacaoSchema);