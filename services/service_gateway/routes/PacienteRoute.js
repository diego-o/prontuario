'use strict';

const httpProxy = require('express-http-proxy');

exports.Add = function(app) {
    const ServiceCadastroPaciente = httpProxy('http://api_paciente:3000');
    app.get('/paciente', (req, res, next) => { ServiceCadastroPaciente(req, res, next) }); //version

    app.post('/paciente', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
    app.put('/paciente/:id', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
    app.get('/paciente/:id', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
    app.get('/paciente/cpf/:cpf', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
    app.get('/paciente/carteirasus/:carteiraSus', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
    app.get('/paciente/cpfmae/:cpfMae', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
    app.get('/paciente/cpfpai/:cpfPai', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
}