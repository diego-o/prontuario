'use strict';

const mongoose = require('mongoose');
const Medico = mongoose.model('Medico');

exports.Insert = async(med) => {
    var medico = new Medico(med);
    return await medico.save();
}

exports.Update = async(id, med) => {
    await Medico.findByIdAndUpdate(id, {
        $set: {
            "endereco.cep" : med.endereco.cep,
            "endereco.logradouro": med.endereco.logradouro,
            "endereco.numero": med.endereco.numero,
            "endereco.bairro": med.endereco.bairro,
            "endereco.municipio": med.endereco.municipio,
            "endereco.uf": med.endereco.uf,
            "contato.telefone": med.contato.telefone,
            "contato.email": med.contato.email,
            ativo: med.ativo,
            nome: med.nome
        }
    });
}

exports.GetById = async(id) => {
    return await Medico.findById(id);
}

exports.GetByCrm = async(crm) => {
    return await Medico.findOne({ "crm.numero" : crm.numero, "crm.uf": crm.uf.toUpperCase() }, '');
}

exports.GetByCpf = async(cpf) => {
    return await Medico.findOne({ cpf : cpf }, '');
}