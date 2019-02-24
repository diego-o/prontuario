'use strict';

const AgenteDao = require('../dao/AgenteDao');

exports.Insert = async(req, res) => {
    try {
        var agente = await AgenteDao.Insert(req.body);
        res.send(agente);
    } catch(error) {
        res.status(500).send({message:'erro ao inserir agente', data: error});
    }
}

exports.Update = async(req, res) => {
    try {
        await AgenteDao.Update(req.params.id, req.body);
        res.send(req.body);
    } catch(error) {
        res.status(500).send({message:'erro ao alterar agente', data: error});
    }
}

exports.GetById = async(req, res) => {
    try {
        var agente = await AgenteDao.GetById(req.params.id);
        res.send(agente);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar agente', data: error});
    }
}

exports.GetByCpf = async(req, res) => {
    try {
        var agente = await AgenteDao.GetByCpf(req.params.cpf);
        res.send(agente);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar agente', data: error});
    }
}