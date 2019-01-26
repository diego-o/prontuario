'use strict';

const mongoose = require('mongoose');
const Enfermeiro = mongoose.model('Enfermeiro');

exports.Insert = async(enf) => {
    var enfermeiro = new Enfermeiro(enf);
    return await enfermeiro.save();
}

exports.Update = async(id, enf) => {
    await Enfermeiro.findByIdAndUpdate(id, {
        $set: {
            "endereco.cep" : enf.endereco.cep,
            "endereco.logradouro": enf.endereco.logradouro,
            "endereco.numero": enf.endereco.numero,
            "endereco.bairro": enf.endereco.bairro,
            "endereco.municipio": enf.endereco.municipio,
            "endereco.uf": enf.endereco.uf,
            "contato.telefone": enf.contato.telefone,
            "contato.email": enf.contato.email,
            ativo: enf.ativo,
            nome: enf.nome
        }
    });
}

exports.GetById = async(id) => {
    return await Enfermeiro.findById(id);
}