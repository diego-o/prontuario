'use strict';

const mongoose = require('mongoose');
const CarteiraVacina = mongoose.model('CarteiraVacina');

exports.Insert = async (carteiraVacina) => {
    await carteiraVacina.save();
    return carteiraVacina;
}

exports.Update = async(id, carteira) => {
    return await CarteiraVacina.findByIdAndUpdate(id, {
        $set:{
            "vacina.dataAplicacao": carteira.vacina.dataAplicacao
        }
    });
}

exports.GetById = async(id) => {
    return await CarteiraVacina.findById(id).populate('carteira');
}

exports.GetByNumeroCarteira = async(numero) => {
    return await CarteiraVacina.find({}, 'vacina organizacao')
        .populate({
            path: 'carteira',
            select: 'paciente numero',
            match: {numero: numero}
        });
}

exports.GetAll = async() => {
    return await CarteiraVacina.find({}, '').populate('carteira');
}