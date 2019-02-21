'use strict';

const mongoose = require('mongoose');
const Status = mongoose.model('StatusAtendimento');

exports.Insert = async (s) => {
    var status = new Status(s);
    await status.save();
    return status;
}

exports.GetAll = async() => {
    return await Status.find({}, 'status descricao');
}

exports.GetById = async(id) => {
    return await Status.findById(id, 'status descricao');
}