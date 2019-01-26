'use strict'

var express = require('express');
var server = express();
var port = process.env.PORT || 3001;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Manager = require('./config');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

Manager.addRoute(server, Manager.appConfig.TipoOrganizacao);
Manager.addRoute(server, Manager.appConfig.Organizacao);
Manager.addRoute(server, Manager.appConfig.Medico);

Manager.configDB(mongoose);

server.listen(port, function() {
    console.log('Serviço Cadastro de Organização rodando na porta ' + port);
});