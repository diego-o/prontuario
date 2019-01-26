'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var schemaEndereco = require('./EnderecoModel');
var schemaContato = require('./ContatoModel');

const SchemaOrganizacao = new Schema({
    cnpj: {
        type: String,
        required: true,
        unique: true,
        index: true,
        max: 14
    },
    razao: {
        type: String,
        required: true,
        max: 100
    },
    fantasia: {
        type: String,
        max: 100
    },
    inscricaoEstadual: {
        type: String
    },
    inscricaoMunicipal: {
        type: String
    },
    site: {
        type: String
    },
    logo: {
        type: String
    },
    ativo: {
        type: Boolean,
        default: true
    },
    dataCadastro: {
        type: Date,
        require: true,
        default: Date.now
    },
    dataAlteracao: {
        type: Date,
        default: Date.now
    },
    endereco: schemaEndereco.SchemaEndereco,
    contato: schemaContato.SchemaContato
});

module.exports = mongoose.model('Organizacao', SchemaOrganizacao);
