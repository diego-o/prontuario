'use strict';

const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

exports.create = async (p) => {
    var paciente = new Paciente(p);
    await paciente.save();
}

exports.getByCpf = async (cpf) => {
    const res = await Paciente.findOne({ cpf: cpf }, '');
    return res;
}
