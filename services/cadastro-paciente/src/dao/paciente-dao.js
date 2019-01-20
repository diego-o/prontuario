'use strict';

const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

exports.create = async (p) => {
    var paciente = new Paciente(p);
    await paciente.save();
}

exports.update = async(id, pac) => {
    await Paciente.findOneAndUpdate(id, {
        $set:{
            dataObito: pac.dataObito,
            telefone: pac.telefone,
            rg: pac.rg,
            "endereco.atual.cep" : pac.endereco.atual.cep,
            "endereco.atual.logradouro" : pac.endereco.atual.logradouro,
            "endereco.atual.numero" : pac.endereco.atual.numero,
            "endereco.atual.bairro" : pac.endereco.atual.bairro,
            "endereco.atual.municipio" : pac.endereco.atual.municipio,
            "endereco.atual.uf" : pac.endereco.atual.uf
        }
    });
}

exports.getByCpf = async (cpf) => {
    return await Paciente.findOne({ cpf: cpf }, '');
}

exports.getByCarteiraSus = async (carteiraSus) => {
    return await Paciente.findOne({carteiraSus: carteiraSus}, '');
}

exports.getByCpfMae = async (cpfMae) => {
    return await Paciente.find({"mae.cpf" : cpfMae}, '');
}

exports.getByCpfPai = async (cpfPai) => {
    return await Paciente.find({"pai.cpf" : cpfPai}, '');
}