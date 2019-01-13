'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//conexão com banco de dados
mongoose.connect('mongodb://cadastro-colaborador-db/base-cadastro-colaborador');
//mongoose.connect('mongodb://diego:diego123@ds153314.mlab.com:53314/cadastro');


//carregando os models

//carregando as rotas
const indexRoute = require('./routes/index-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoute);

module.exports = app;