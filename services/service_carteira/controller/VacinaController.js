'use strict';

const VacinaDao = require('../dao/VacinaDao');

exports.Insert = async (req, res, next) => {
    try {
        var vacina = await VacinaDao.Insert(req.body);
        res.status(200).send(vacina);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao cadastrar vacina.',
            Data: error
        });
    }     
}

exports.Update = async (req, res, next) => {
    try {
        var vacina = await VacinaDao.Update(req.params.id, req.body);
        res.status(200).send(vacina);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao atualizar vacina.',
            Data: error
        });
    }     
}

exports.GetById = async (req, res, next) => {
    try {
        var vacina = await VacinaDao.GetById(req.params.id);
        res.status(200).send(vacina);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar vacina.',
            Data: error
        });
    }     
}

exports.GetByCodigo = async (req, res, next) => {
    try {
        var vacina = await VacinaDao.GetByCodigo(req.params.codigo);
        res.status(200).send(vacina);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar vacina.',
            Data: error
        });
    }     
}

exports.GetAll = async (req, res, next) => {
    try {
        var vacinas = await VacinaDao.GetAll();
        res.status(200).send(vacinas);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar vacinas.',
            Data: error
        });
    }
}