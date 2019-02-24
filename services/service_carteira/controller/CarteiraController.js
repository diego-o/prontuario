'use strict';

const CarteiraDao = require('../dao/CarteiraDao');
const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

const PacienteService = require('../services/PacienteService');

exports.Insert = async (req, res, next) => {
    try {
        var carteira = new Carteira(req.body);

        PacienteService.Get("paciente/"+carteira.paciente.idPaciente, async function(paciente) {
            if (paciente == null) {
                res.status(500).send({ Message: 'Erro ao cadastrar carteira.',  Data: 'idPaciente não encontrado.' });
            } else {
                carteira.paciente.nome = paciente.nome;
                carteira.paciente.carteiraSus = paciente.carteiraSus;
                carteira.paciente.cpf = paciente.cpf;

                try {
                    var carteiraPersistida = await CarteiraDao.Insert(carteira);
                    res.status(200).send(carteiraPersistida);
                } catch (error) {
                    res.status(500).send({ Message: 'Erro ao cadastrar carteira.', Data: error });
                }                
            }
        }); 
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao cadastrar carteira.', Data: error });
    }     
}

exports.GetById = async (req, res, next) => {
    try {
        var carteira = await CarteiraDao.GetById(req.params.id);
        res.status(200).send(carteira);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar carteira.', Data: error });
    }     
}

exports.GetByNumero = async (req, res, next) => {
    try {
        var carteira = await CarteiraDao.GetByNumero(req.params.numero);
        res.status(200).send(carteira);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar carteira.', Data: error });
    }     
}

exports.GetByCpf = async (req, res, next) => {
    try {
        var carteira = await CarteiraDao.GetByCpf(req.params.cpf);
        res.status(200).send(carteira);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar carteira.', Data: error });
    }     
}