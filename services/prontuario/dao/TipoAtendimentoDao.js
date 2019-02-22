'use strict';

const mongoose = require('mongoose');
const Tipo = mongoose.model('TipoAtendimento');

exports.Insert = async (t) => {
    var tipo = new Tipo(t);
    await tipo.save();
    return tipo;
}

exports.GetAll = async() => {
    return await Tipo.find({}, 'tipo descricao');
}

exports.GetById = async(id) => {
    return await Tipo.findById(id, 'tipo descricao');
}