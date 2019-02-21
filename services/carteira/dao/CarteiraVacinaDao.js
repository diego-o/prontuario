'use strict';

const mongoose = require('mongoose');
const CarteiraVacina = mongoose.model('CarteiraVacina');

exports.Insert = async (carteiraVacina) => {
    await carteiraVacina.save();
    return carteiraVacina;
}