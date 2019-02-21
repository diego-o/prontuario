'use strict';

const mongoose = require('mongoose');
const Vacina = mongoose.model('Vacina');

exports.Insert = async(v) => {
    var vacina = new Vacina(v);
    await vacina.save();
    return vacina;
}

exports.Update = async(id, v) => {
    return await Vacina.findByIdAndUpdate(id, {
        $set: {
            nome: v.nome,
            descricao: v.descricao
        }
    });
}

exports.GetById = async(id) => {
    return await Vacina.findById(id);
}

exports.GetByCodigo = async(codigo) => {
    return await Vacina.findOne({codigo: codigo}, '');
}

exports.GetAll = async() => {
    return await Vacina.find();
}