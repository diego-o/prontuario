'use strict';

const pacienteDao = require('../dao/paciente-dao');

exports.getByCpf = async (req, res, next) => {
    try {
        var paciente = await pacienteDao.getByCpf(req.params.cpf);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({
           Message: 'Erro ao consultar paciente.' ,
           Data: error
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await pacienteDao.create(req.body);
        res.status(200).send({Message: 'Paciente cadastrado com sucesso.'});
    } catch (error) {
        res.status(500).send({
           Message: 'Erro ao cadastrar paciente.' ,
           Data: error
        });
    }
}