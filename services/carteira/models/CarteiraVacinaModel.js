'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaCarteiraVacina = new Schema({
    carteira: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true
    },
    vacina: {
        vacina: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vacina',
            require: true,
            unique: true
        },
        dataPrevista: {
            type: Date
        },
        dataAplicacao: {
            type: Date
        }
    },
    organizacao: {
        idOrganizacao: {
            type: String
        },
        nome: {
            type: String
        },
        cnpj: {
            type: String
        }
    }
});

module.exports = mongoose.model('CarteiraVacina', SchemaCarteiraVacina);