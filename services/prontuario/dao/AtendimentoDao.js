'use strict';

const mongoose = require('mongoose');
const Atendimento = mongoose.model('Atendimento');

exports.Insert = async (atendimento) => {
    await atendimento.save();
    return atendimento;
}

exports.GetById = async (id) => {
    var atendimento = await Atendimento.findById(id);
    return atendimento;
}

exports.GetByNumero = async (numero) => {
    var atendimento = await Atendimento.findOne({numero: numero}, '');
    return atendimento;
}

exports.GetByCpfPaciente = async (cpf) => {
    var atendimentos = await Atendimento.find({"paciente.cpf" : cpf}, '');
    return atendimentos;
}

exports.GetByCnpjOrganizacao = async (cnpj) => {
    var atendimentos = await Atendimento.find({"organizacao.cnpj" : cnpj}, '');
    return atendimentos;
}