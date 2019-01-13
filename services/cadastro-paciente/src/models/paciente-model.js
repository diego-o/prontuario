'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    rg: {
        type: String
    },
    sexo: {
        type: String,
        required: true,
        enum:['Masculino', 'Feminino']
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    dataObito:{
        type: Date
    },
    telefone: {
        type: String,
        required: true
    },
    pai: {
        nome: {
            type: String
        },
        cpf: {
            type: String
        }
    },
    mae: {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        }
    },
    endereco: {
        nascimento: {
            cep: {
                type: String,
                required: true
            },
            logradouro: {
                type: String,
                required: true
            },
            numero: {
                type: String,
                required: true
            },
            bairro: {
                type: String,
                required: true
            },
            municipio: {
                type: String,
                required: true
            },
            uf: {
                type: String,
                required: true
            }
        },
        atual: {
            cep: {
                type: String,
                required: true
            },
            logradouro: {
                type: String,
                required: true
            },
            numero: {
                type: String,
                required: true
            },
            bairro: {
                type: String,
                required: true
            },
            municipio: {
                type: String,
                required: true
            },
            uf: {
                type: String,
                required: true
            }
        }
    }
});

module.exports = mongoose.model('Paciente', schema);
