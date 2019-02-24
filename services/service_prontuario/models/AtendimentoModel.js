'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaAtendimento = new Schema({
    numero: {
        type: String,
        unique: true,
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoAtendimento',
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StatusAtendimento',
        required: true
    },
    dataPrevista: {
        type: Date,
        required: true
    },
    dataAtendimento: {
        type: Date
    },
    cid: {
        type: String
    },
    descricao: {
        type: String
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
    },
    organizacao: {
        idOrganizacao: {
            type: String,
            require: true
        },
        nome: {
            type: String
        },
        cnpj: {
            type: String
        }
    },
    anexos: [{
        type: String
    }]
});

module.exports = mongoose.model('Atendimento', SchemaAtendimento);