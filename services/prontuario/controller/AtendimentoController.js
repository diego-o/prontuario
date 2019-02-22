'use strict';

const Dao = require('../dao/AtendimentoDao');
const mongoose = require('mongoose');
const Atendimento = mongoose.model('Atendimento');
const guid = require('guid');

const PacienteService = require('../services/PacienteService');
const OrganizacaoService = require('../services/OrganizacaoService');

exports.Insert = async (req, res, next) => {
    try {
        var atendimento = new Atendimento(req.body);
        atendimento.numero = guid.raw().substring(0, 10);

        PacienteService.Get("paciente/"+atendimento.paciente.idPaciente, async function(paciente) {
            if (paciente == null) {
                res.status(500).send({ Message: 'Erro ao cadastrar atendimento.',  Data: 'idPaciente não encontrado.' });
            } else {
                atendimento.paciente.nome = paciente.nome;
                atendimento.paciente.carteiraSus = paciente.carteiraSus;
                atendimento.paciente.cpf = paciente.cpf;

                OrganizacaoService.Get("organizacao/organizacao/"+atendimento.organizacao.idOrganizacao, async function(org) {
                    if (org == null) {
                        res.status(500).send({ Message: 'Erro ao cadastrar atendimento.',  Data: 'idOrganizacao não encontrado.' });
                    } else {
                        atendimento.organizacao.nome = org.razao;
                        atendimento.organizacao.cnpj = org.cnpj;
        
                        try {
                            var atendimentoPersistido = await Dao.Insert(atendimento);
                            res.status(200).send(atendimentoPersistido);
                        } catch (error) {
                            res.status(500).send({ Message: 'Erro ao cadastrar atendimento.', Data: error });
                        }                
                    }
                });               
            }
        });
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao cadastrar atendimento.', Data: error });
    } 
}

exports.Update = async (req, res, next) => {
    try {
        var atendimento = await Dao.Update(req.params.id, req.body);
        res.status(200).send(atendimento);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao alterar atendimento.', Data: error });
    }     
}

exports.GetById = async (req, res, next) => {
    try {
        var atendimento = await Dao.GetById(req.params.id);
        res.status(200).send(atendimento);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar atendimento.', Data: error });
    }     
}

exports.GetByNumero = async (req, res, next) => {
    try {
        var atendimento = await Dao.GetByNumero(req.params.numero);
        res.status(200).send(atendimento);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar atendimento.', Data: error });
    }     
}

exports.GetByCpfPaciente = async (req, res, next) => {
    try {
        var atendimentos = await Dao.GetByCpfPaciente(req.params.cpf);
        res.status(200).send(atendimentos);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar atendimento.', Data: error });
    }     
}

exports.GetByCnpjOrganizacao = async (req, res, next) => {
    try {
        var atendimentos = await Dao.GetByCnpjOrganizacao(req.params.cnpj);
        res.status(200).send(atendimentos);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar atendimento.', Data: error });
    }     
}