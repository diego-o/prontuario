'use strict';

const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

exports.Insert = async(carteira) => {
    await carteira.save();
    return carteira;
}