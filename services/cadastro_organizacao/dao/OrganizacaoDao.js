'use strict';

const mongoose = require('mongoose');
const Organizacao = mongoose.model('Organizacao');

exports.Insert = async(org) => {
    var organizacao = new Organizacao(org);
    return await organizacao.save();
}

exports.Update = async(id, org) => {
    await Organizacao.findByIdAndUpdate(id, {
        $set: {
            ativo: org.ativo,
            razao: org.razao,
            fantasia: org.fantasia, 
            inscricaoEstadual: org.inscricaoEstadual,
            inscricaoMunicipal: org.inscricaoMunicipal,
            site: org.site,
            logo: org.logo,
            "endereco.cep" : org.endereco.cep,
            "endereco.logradouro": org.endereco.logradouro,
            "endereco.numero": org.endereco.numero,
            "endereco.bairro": org.endereco.bairro,
            "endereco.municipio": org.endereco.municipio,
            "endereco.uf": org.endereco.uf,
            "contato.telefone": org.contato.telefone,
            "contato.email": org.contato.email,
            dataAlteracao: Date.Now
        }
    });
}

exports.Select = async() => {
    var Orgs = await Organizacao.find({}, '');
    return Orgs;   
}