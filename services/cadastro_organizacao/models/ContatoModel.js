'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaContato = new Schema({
    telefone: {
        type: String,
        required: true,
        max: 12
    },
    email: {
        type: String,
        required: true,
        max: 100
    }
});

exports.SchemaContato = SchemaContato;