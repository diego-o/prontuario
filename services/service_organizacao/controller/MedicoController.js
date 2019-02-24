'use strict';

const MedicoDao = require('../dao/MedicoDao');

exports.Insert = async(req, res) => {
    try {
        var medico = await MedicoDao.Insert(req.body);
        res.send(medico);
    } catch(error) {
        res.status(500).send({message:'erro ao inserir medico', data: error});
    }
}

exports.Update = async(req, res) => {
    try {
        await MedicoDao.Update(req.params.id, req.body);
        res.send(req.body);
    } catch(error) {
        res.status(500).send({message:'erro ao alterar medico', data: error});
    }
}

exports.GetById = async(req, res) => {
    try {
        var medico = await MedicoDao.GetById(req.params.id);
        res.send(medico);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar medico', data: error});
    }
}

exports.GetByCrm = async(req, res) => {
    try {
        var medico = await MedicoDao.GetByCrm(req.body);
        res.send(medico);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar medico', data: error});
    }
}

exports.GetByCpf = async(req, res) => {
    try {
        var medico = await MedicoDao.GetByCpf(req.params.cpf);
        res.send(medico);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar medico', data: error});
    }
}