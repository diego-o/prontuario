'use strict';

const CarteiraVacinaDao = require('../dao/CarteiraVacinaDao');
const VacinaDao = require('../dao/VacinaDao');
const mongoose = require('mongoose');
const CarteiraVacina = mongoose.model('CarteiraVacina');

const OrganizacaoService = require('../services/OrganizacaoService');

exports.Insert = async (req, res, next) => {
    try {
        var carteiraVacina = new CarteiraVacina(req.body);

        OrganizacaoService.Get("organizacao/organizacao/"+carteiraVacina.organizacao.idOrganizacao, async function(org) {
            if (org == null) {
                res.status(500).send({ Message: 'Erro ao cadastrar.',  Data: 'idOrganizacao não encontrado.' });
            } else {
                carteiraVacina.organizacao.nome = org.razao;
                carteiraVacina.organizacao.cnpj = org.cnpj;

                try {
                    var carteiraVacinaPersistida = await CarteiraVacinaDao.Insert(carteiraVacina);
                    res.status(200).send(carteiraVacinaPersistida);
                } catch (error) {
                    res.status(500).send({ Message: 'Erro ao cadastrar.', Data: error });
                }                
            }
        }); 
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao cadastrar.', Data: error });
    }     
}

exports.Update = async (req, res, next) => {
    try {
        var carteiraVacina = await CarteiraVacinaDao.Update(req.params.id, req.body);
        res.status(200).send(carteiraVacina);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao alterar.', Data: error });
    }     
}

exports.GetById = async (req, res, next) => {
    try {
        var carteiraVacina = await CarteiraVacinaDao.GetById(req.params.id);
        res.status(200).send(carteiraVacina);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar.', Data: error });
    }     
}

exports.GetByNumeroCarteira = async (req, res, next) => {
    try {
        var carteiraVacina = await CarteiraVacinaDao.GetByNumeroCarteira(req.params.numero);
        var Carteira = null;

        if (carteiraVacina.carteira !== null) {
            var Carteira = {
                numero: carteiraVacina[0].carteira.numero,
                paciente: carteiraVacina[0].carteira.paciente,
                vacinas: []
            }
            
            for (var i = 0; i < carteiraVacina.length; i++) {
                Carteira.vacinas.push({
                    vacina: await VacinaDao.GetById(carteiraVacina[i].vacina.vacina),
                    aplicacao: {
                        dataPrevista: carteiraVacina[i].vacina.dataPrevista,
                        dataAplicacao: carteiraVacina[i].vacina.dataAplicacao,
                        aplicada: carteiraVacina[i].vacina.dataAplicacao != null ? "Aplicada" : "Pendente"
                    },
                    organizacao: carteiraVacina[i].organizacao
                });
            }
        }   

        res.status(200).send(Carteira);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar.', Data: error });
        console.log(error);
    }     
}

exports.GetByCpf = async (req, res, next) => {
    try {
        var carteiraVacina = await CarteiraVacinaDao.GetByCpf(req.params.cpf);
        var Carteira = null;

        if (carteiraVacina.carteira !== null) {
            Carteira = {
                numero: carteiraVacina[0].carteira.numero,
                paciente: carteiraVacina[0].carteira.paciente,
                vacinas: []
            }
            
            for (var i = 0; i < carteiraVacina.length; i++) {
                Carteira.vacinas.push({
                    vacina: await VacinaDao.GetById(carteiraVacina[i].vacina.vacina),
                    aplicacao: {
                        dataPrevista: carteiraVacina[i].vacina.dataPrevista,
                        dataAplicacao: carteiraVacina[i].vacina.dataAplicacao,
                        aplicada: carteiraVacina[i].vacina.dataAplicacao != null ? "Aplicada" : "Pendente"
                    },
                    organizacao: carteiraVacina[i].organizacao
                });
            }
        }        

        res.status(200).send(Carteira);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar.', Data: error });
        console.log(error);
    }     
}

exports.GetAll = async (req, res, next) => {
    try {
        var carteirasVacina = await CarteiraVacinaDao.GetAll();
        res.status(200).send(carteirasVacina);
    } catch (error) {
        res.status(500).send({ Message: 'Erro ao consultar.', Data: error });
    }     
}