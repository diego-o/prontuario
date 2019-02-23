'use strict'

var express = require('express');
var server = express();
var port = process.env.PORT || 3002;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Manager = require('./config');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

Manager.addRoute(server, Manager.appConfig.Paciente);
Manager.configDB(mongoose);

server.listen(port, function() {
   console.log('Serviço Cadastro de Paciente rodando na porta ' + port); 
});
