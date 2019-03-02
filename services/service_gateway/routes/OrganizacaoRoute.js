'use strict';

const httpProxy = require('express-http-proxy');

exports.Add = function(app) {
    const ServiceCadastroOrganizacao = httpProxy('http://api_organizacao:3000');
    app.get('/organizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) }); //version

    app.post('/organizacao/agente', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.put('/organizacao/agente/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/agente/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/agente/cpf/:cpf', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    app.post('/organizacao/enfermeiro', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/enfermeiro/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.put('/organizacao/enfermeiro/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/enfermeiro/cpf/:cpf', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.post('/organizacao/enfermeiro/coren', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    app.post('/organizacao/medico', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.put('/organizacao/medico/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/medico/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.post('/organizacao/medico/crm', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/medico/cpf/:cpf', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    app.post('/organizacao/organizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/organizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.put('/organizacao/organizacao/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/organizacao/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/organizacao/cnpj/:cnpj', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    app.post('/organizacao/tipoorganizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/tipoorganizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
}