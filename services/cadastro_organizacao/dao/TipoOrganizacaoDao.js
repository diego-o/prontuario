'use strict';

const mongoose = require('mongoose');
const TipoOrganizacao = mongoose.model('TipoOrganizacao');

exports.Select = async () => {
    var Tipos = await TipoOrganizacao.find({}, 'codigo tipo');
    return Tipos;
}

exports.Insert = async (tipo) => {
    var Tipo = new TipoOrganizacao(tipo);
    return await Tipo.save();
}