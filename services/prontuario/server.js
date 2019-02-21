'use strict';

var express = require('express');
var server = express();
var port = process.env.port || 3004;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Manager = require('./config');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

Manager.addRoute(server, Manager.appConfig.StatusAtendimento);
Manager.configDB(mongoose);

server.listen(port, function() {
   console.log('Serviço Prontuário rodando na porta ' + port); 
});
