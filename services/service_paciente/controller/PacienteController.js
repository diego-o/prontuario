'use strict';

const pacienteDao = require('../dao/PacienteDao');

exports.Insert = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.Insert(req.body);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao cadastrar paciente.',
            Data: error
        });
    }
}

exports.Update = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.Update(req.params.id, req.body);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao cadastrar paciente.', Data: error });
    }
}

exports.GetById = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.GetById(req.params.id);
        console.log("consulta de paciente executada");
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar paciente.', Data: error });
    }
}

exports.GetByCpf = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.GetByCpf(req.params.cpf);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar paciente.', Data: error });
    }
}

exports.GetByCarteiraSus = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.GetByCarteiraSus(req.params.carteiraSus);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar paciente.', Data: error });
    }
}

exports.GetByCpfMae = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.GetByCpfMae(req.params.cpfMae);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar paciente.', Data: error });
    }
}

exports.GetByCpfPai = async(req, res, next) => {
    try {
        var paciente = await pacienteDao.GetByCpfPai(req.params.cpfPai);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar paciente.', Data: error });
    }
}