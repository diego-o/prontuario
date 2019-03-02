'use strict';
const httpProxy = require('express-http-proxy');

exports.Add = function(app){
    const ServiceProntuario = httpProxy('http://api_prontuario:3000');
    app.get('/prontuario', (req, res, next) => { ServiceProntuario(req, res, next) }); //version

    app.post('/prontuario/atendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.put('/prontuario/atendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/atendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/atendimento/numero/:numero', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/atendimento/cpf/:cpf', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/atendimento/cnpj/:cnpj', (req, res, next) => { ServiceProntuario(req, res, next) });

    app.post('/prontuario/statusatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/statusatendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/statusatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

    app.post('/prontuario/tipoatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/tipoatendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
    app.get('/prontuario/tipoatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
}