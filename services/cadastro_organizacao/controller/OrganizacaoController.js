'use strict';

const OrganizacaoDao = require('../dao/OrganizacaoDao');

exports.Insert = async(req, res) => {
    try {
        var organizacao = await OrganizacaoDao.Insert(req.body);
        res.send(organizacao);
    } catch(error) {
        res.status(500).send({message:'erro ao inserir organização', data: error});
    }
}

exports.Update = async(req, res) => {
    try {
        await OrganizacaoDao.Update(req.params.id, req.body);
        res.send(req.body);
    } catch(error) {
        res.status(500).send({message:'erro ao alterar organização', data: error});
    }
}

exports.Select = async(req, res) => {
    try {
        var orgs = await OrganizacaoDao.Select();
        res.json(orgs);
    } catch(error) {
        res.status(500).send({message:'erro ao listar organizações', data: error});
    }
}

exports.GetById = async(req, res) => {
    try {
        var org = await OrganizacaoDao.GetById(req.params.id);
        res.json(org);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar organização', data: error});
    }
}

exports.GetByCnpj = async(req, res) => {
    try {
        var org = await OrganizacaoDao.GetByCnpj(req.params.cnpj);
        res.json(org);
    } catch(error) {
        res.status(500).send({message:'erro ao consultar organização', data: error});
    }
}