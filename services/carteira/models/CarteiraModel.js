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
            type: String,
            require: true
        },
        carteiraSus: {
            type: String,
            require: true
        },
        cpf: {
            type: String,
            require: true
        }
    },
    vacinas: [
        {
            vacina: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vacina',
                required: true
            },
            dataPrevista: {
                type: Date,
                require: true
            },
            dataAplicacao: {
                type: Date
            },
            organizacao: {
                idOrganizacao: {
                    type: String,
                    require: true
                },
                nome: {
                    type: String,
                    require: true
                },
                cnpj: {
                    type: String,
                    require: true
                }
            },
            enfermeiro: {
                idEnfermeiro: {
                    type: String,
                    require: true
                },
                nome: {
                    type: String,
                    require: true
                },
                cpf: {
                    type: String,
                    require: true
                }
            }
        }
    ]
});

module.exports = mongoose.model('Carteira', SchemaCarteira);
