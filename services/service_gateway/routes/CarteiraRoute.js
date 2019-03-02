'use strict';

const httpProxy = require('express-http-proxy');

exports.Add = function(app){
    const ServiceCarteira = httpProxy('http://api_carteira:3000');
    app.get('/carteira', (req, res, next) => { ServiceCarteira(req, res, next) }); //version

    app.post('/carteira', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteira/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteira/numero/:numero', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteira/cpf/:cpf', (req, res, next) => { ServiceCarteira(req, res, next) });

    app.post('/carteiravacina', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.put('/carteiravacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteiravacina', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteiravacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteiravacina/numerocarteira/:numerocarteira', (req, res, next) => { ServiceCarteira(req, res, next) });

    app.post('/carteira/vacina', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.put('/carteira/vacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteira/vacina', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteira/vacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteira/vacina/codigo/:codigo', (req, res, next) => { ServiceCarteira(req, res, next) });
}