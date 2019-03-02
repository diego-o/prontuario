'use strict'

var http = require('http');
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

var IndexRoute = require('./routes/IndexRoute');
IndexRoute.Add(app);

var OrganizacaoRoute = require('./routes/OrganizacaoRoute');
OrganizacaoRoute.Add(app);

var PacienteRoute = require('./routes/PacienteRoute');
PacienteRoute.Add(app);

var CarteiraRoute = require('./routes/CarteiraRoute');
CarteiraRoute.Add(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = http.createServer(app);
server.listen(port);
console.log('API Gateway rodando na porta ' + port);
