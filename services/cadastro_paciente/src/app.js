'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//conexão com banco de dados
mongoose.connect('mongodb://diego:diego123@ds255784.mlab.com:55784/cadastro-paciente', { useNewUrlParser: true });

//usar com Docker
//mongoose.connect('mongodb://cadastro_paciente_db/base_cadastro_paciente');

//carregando os models
const Paciente = require('./models/PacienteModel');

//carregando as rotas
const indexRoute = require('./routes/IndexRoute');
const pacienteRoute = require('./routes/PacienteRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/paciente', pacienteRoute);

module.exports = app;