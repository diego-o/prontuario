'use strict';

const pacienteDao = require('../dao/paciente-dao');

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

exports.put = async (req, res, next) => {
    try {
        await pacienteDao.update(req.params.id, req.body);
        res.status(200).send({Message: 'Paciente alterado com sucesso.'});
    } catch (error) {
        res.status(500).send({
           Message: 'Erro ao cadastrar paciente.' ,
           Data: error
        });
    }
}

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

exports.getByCarteiraSus = async (req, res, next) => {
    try {
        var paciente = await pacienteDao.getByCarteiraSus(req.params.carteiraSus);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({
           Message: 'Erro ao consultar paciente.' ,
           Data: error
        });
    }
}

exports.getByCpfMae = async (req, res, next) => {
    try {
        var paciente = await pacienteDao.getByCpfMae(req.params.cpfMae);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({
           Message: 'Erro ao consultar paciente.' ,
           Data: error
        });
    }
}

exports.getByCpfPai = async (req, res, next) => {
    try {
        var paciente = await pacienteDao.getByCpfPai(req.params.cpfPai);
        res.status(200).send(paciente);
    } catch (error) {
        res.status(500).send({
           Message: 'Erro ao consultar paciente.' ,
           Data: error
        });
    }
}