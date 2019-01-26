'use strict';

const TipoOrganizacaoDao = require('../dao/TipoOrganizacaoDao');

exports.Select = async (req, res) => {
    try {
        var Tipos = await TipoOrganizacaoDao.Select();
        res.json(Tipos);
    } catch(error) {
        res.status(500).send({message: 'Erro ao listar TipoOrganizacao', data: error});
    }
}

exports.Insert = async (req, res) => {
    try {
        var TipoOrganizacao = await TipoOrganizacaoDao.Insert(req.body);
        res.json(TipoOrganizacao);
    } catch(error) {
        res.status(500).send({message: 'Erro ao inserir TipoOrganizacao', data: error});
    }
}