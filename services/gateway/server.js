'use strict'

var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

const ServiceCadastroOrganizacao = httpProxy('http://cadastro_organizacao_api:3001');
const ServiceCadastroPaciente = httpProxy('http://cadastro_paciente_api:3002');

app.get('/organizacao', (req, res, next) => {
    ServiceCadastroOrganizacao(req, res, next);
});

app.get('/paciente', (req, res, next) => {
    ServiceCadastroPaciente(req, res, next);
});

app.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API de Gateway do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = http.createServer(app);
server.listen(3000);
console.log('API Gateway rodando na porta 3000');