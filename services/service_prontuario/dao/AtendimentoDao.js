'use strict';

const mongoose = require('mongoose');
const Atendimento = mongoose.model('Atendimento');

exports.Insert = async (atendimento) => {
    await atendimento.save();
    return atendimento;
}

exports.Update = async(id, atendimento) => {
    console.log(atendimento);
    return await Atendimento.findByIdAndUpdate(id, {
        $set:{
            status: atendimento.status,
            tipo: atendimento.tipo,
            dataAtendimento: atendimento.dataAtendimento,
            descricao: atendimento.descricao,
            "medico.idMedico" : atendimento.medico != undefined ? atendimento.medico.idMedico : null,
            "medico.nome" : atendimento.medico != undefined ? atendimento.medico.nome : null,
            "medico.crm" : atendimento.medico != undefined ? atendimento.medico.crm : null
        }
    });
}

exports.GetById = async (id) => {
    var atendimento = await Atendimento.findById(id).populate('status').populate('tipo');
    return atendimento;
}

exports.GetByNumero = async (numero) => {
    var atendimento = await Atendimento.findOne({numero: numero}, '').populate('status').populate('tipo');
    return atendimento;
}

exports.GetByCpfPaciente = async (cpf) => {
    var atendimentos = await Atendimento.find({"paciente.cpf" : cpf}, '')
        .sort({dataPrevista: -1})
        .populate('status')
        .populate('tipo');

    return atendimentos;
}

exports.GetByCnpjOrganizacao = async (cnpj) => {
    var atendimentos = await Atendimento.find({"organizacao.cnpj" : cnpj}, '')
        .sort({dataPrevista: -1})
        .populate('status')
        .populate('tipo');

    return atendimentos;
}