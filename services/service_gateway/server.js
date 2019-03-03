'use strict'

var http = require('http');
const express = require('express');
const app = express();
var port = process.env.PORT || 80; //3000
var swaggerJSDoc = require('swagger-jsdoc');
var path = require('path');
var cors = require('cors');

var swaggerDefinition = {
    info: {
       title: 'Documentação de APIs do Prontuário Eletrônico',
       version: '1.0.0.0',
       description: '',
    },
    host: 'localhost',
    basePath: '/'
};
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./routes/*.js']
};
var swaggerSpec = swaggerJSDoc(options);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/swagger.json', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(swaggerSpec);
});

app.use(cors());

var IndexRoute = require('./routes/IndexRoute');
IndexRoute.Add(app);

var OrganizacaoRoute = require('./routes/OrganizacaoRoute');
OrganizacaoRoute.Add(app);

var PacienteRoute = require('./routes/PacienteRoute');
PacienteRoute.Add(app);

var CarteiraRoute = require('./routes/CarteiraRoute');
CarteiraRoute.Add(app);

var ProntuarioRoute = require('./routes/ProntuarioRoute');
ProntuarioRoute.Add(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = http.createServer(app);
server.listen(port);
console.log('API Gateway rodando na porta ' + port);
