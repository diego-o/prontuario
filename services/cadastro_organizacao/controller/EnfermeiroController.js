'use strict';

const EnfermeiroDao = require('../dao/EnfermeiroDao');

exports.Insert = async(req, res) => {
    try {
        var enfermeiro = await EnfermeiroDao.Insert(req.body);
        res.send(enfermeiro);
    } catch(error) {
        res.status(500).send({message:'erro ao inserir enfermeiro', data: error});
    }
}

exports.Update = async(req, res) => {
    try {
        await EnfermeiroDao.Update(req.params.id, req.body);
        res.send(req.body);
    } catch(error) {
        res.status(500).send({message:'erro ao alterar enfermeiro', data: error});
    }
}

exports.GetById = async(req, res) => {
    try {
        var enfermeiro = await EnfermeiroDao.GetById(req.params.id);
        res.send(enfermeiro);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar enfermeiro', data: error});
    }
}