'use strict';

const CarteiraDao = require('../dao/CarteiraDao');
const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

const PacienteService = require('../services/PacienteService');

exports.Insert = async (req, res, next) => {
    try {
        var carteira = new Carteira(req.body);
        //console.log(carteira);

        //verificar se paciente existe
        PacienteService.Get("paciente/"+carteira.paciente.idPaciente, function(response){
            console.log(response);

            res.status(200).send(carteira);
        });

        //verificar se organização existe

        //var carteira = await CarteiraDao.Insert(carteira);
        
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao cadastrar carteira.',
            Data: error
        });
    }     
}

