'use strict';

const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

exports.Insert = async (carteira) => {
    await carteira.save();
    return carteira;
}

exports.GetById = async(id) => {
    return await Carteira.findById(id);
}

exports.GetByNumero = async(numero) => {
    return await Carteira.findOne({numero: numero}, '');
}

exports.GetByCpf = async(cpf) => {
    return await Carteira.findOne({"paciente.cpf": cpf}, '');
}