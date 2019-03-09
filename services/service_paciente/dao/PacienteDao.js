'use strict';

const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

exports.Insert = async(p) => {
    var paciente = new Paciente(p);
    await paciente.save();
    return paciente;
}

exports.Update = async(id, pac) => {
    return await Paciente.findOneAndUpdate(id, {
        $set: {
            dataObito: pac.dataObito,
            telefone: pac.telefone,
            dataNascimento: pac.dataNascimento,
            rg: pac.rg,
            "endereco.atual.cep": pac.endereco.atual.cep,
            "endereco.atual.logradouro": pac.endereco.atual.logradouro,
            "endereco.atual.numero": pac.endereco.atual.numero,
            "endereco.atual.bairro": pac.endereco.atual.bairro,
            "endereco.atual.municipio": pac.endereco.atual.municipio,
            "endereco.atual.uf": pac.endereco.atual.uf
        }
    });
}

exports.GetById = async(id) => {
    return await Paciente.findById(id);
}

exports.GetByCpf = async(cpf) => {
    return await Paciente.findOne({ cpf: cpf }, '');
}

exports.GetByCarteiraSus = async(carteiraSus) => {
    return await Paciente.findOne({ carteiraSus: carteiraSus }, '');
}

exports.GetByCpfMae = async(cpfMae) => {
    return await Paciente.find({ "mae.cpf": cpfMae }, '');
}

exports.GetByCpfPai = async(cpfPai) => {
    return await Paciente.find({ "pai.cpf": cpfPai }, '');
}