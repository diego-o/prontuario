'use strict';

const Dao = require('../dao/TipoAtendimentoDao');

exports.Insert = async (req, res, next) => {
    try {
        var tipo = await Dao.Insert(req.body);
        res.status(200).send(tipo);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao inserir tipo de atendimento.', Data: error });
    }  
}

exports.GetAll = async (req, res, next) => {
    try {
        var tipos = await Dao.GetAll();
        res.status(200).send(tipos);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar tipo de atendimento.', Data: error });
    }  
}

exports.GetById = async (req, res, next) => {
    try {
        var tipo = await Dao.GetById(req.params.id);
        res.status(200).send(tipo);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar tipo de atendimento.', Data: error });
    }  
}