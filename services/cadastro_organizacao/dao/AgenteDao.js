'use strict';

const mongoose = require('mongoose');
const Agente = mongoose.model('Agente');

exports.Insert = async(agen) => {
    var agente = new Agente(agen);
    return await agente.save();
}

exports.Update = async(id, agen) => {
    await Agente.findByIdAndUpdate(id, {
        $set: {
            "endereco.cep" : agen.endereco.cep,
            "endereco.logradouro": agen.endereco.logradouro,
            "endereco.numero": agen.endereco.numero,
            "endereco.bairro": agen.endereco.bairro,
            "endereco.municipio": agen.endereco.municipio,
            "endereco.uf": agen.endereco.uf,
            "contato.telefone": agen.contato.telefone,
            "contato.email": agen.contato.email,
            ativo: agen.ativo,
            nome: agen.nome
        }
    });
}

exports.GetById = async(id) => {
    return await Agente.findById(id);
}

exports.GetByCpf = async(cpf) => {
    return await Agente.findOne({cpf: cpf}, '');
}