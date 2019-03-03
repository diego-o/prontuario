'use strict';

const mongoose = require('mongoose');
require('../models/PacienteModel');
const Paciente = mongoose.model('Paciente');

exports.Insert = async (req, res, next) => {
    try {
        var paciente = new Paciente(req.body);
        await paciente.save();
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao cadastrar acesso do paciente.', Data: error });
    }     
}

exports.Update = async (req, res, next) => {
    try {
        var paciente = await Paciente.findByIdAndUpdate(req.params.id, {
            $set:{
                senha: req.body.senha
            }
        });
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao atualizar acesso do paciente.', Data: error });
    }
}

exports.Login = async (req, res, next) => {
    try {
        var paciente = await Paciente.findOne({ ativo: true, cpf: req.body.cpf, senha: req.body.senha }, 'cpf nome');
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao atualizar acesso do paciente.', Data: error });
    }
}