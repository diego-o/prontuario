'use strict';

const Dao = require('../dao/StatusAtendimentoDao');

exports.Insert = async (req, res, next) => {
    try {
        var status = await Dao.Insert(req.body);
        res.status(200).send(status);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao inserir status.', Data: error });
    }  
}

exports.GetAll = async (req, res, next) => {
    try {
        var status = await Dao.GetAll();
        res.status(200).send(status);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar status.', Data: error });
    }  
}

exports.GetById = async (req, res, next) => {
    try {
        var status = await Dao.GetById(req.params.id);
        res.status(200).send(status);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar status.', Data: error });
    }  
}