'use strict'

var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
var port = process.env.PORT || 3000;

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

const ServiceCadastroPaciente = httpProxy('http://api_paciente:3000');
app.get('/paciente', (req, res, next) => { ServiceCadastroPaciente(req, res, next) }); //version

app.post('/paciente', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
app.put('/paciente/:id', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
app.get('/paciente/:id', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
app.get('/paciente/cpf/:cpf', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
app.get('/paciente/carteirasus/:carteiraSus', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
app.get('/paciente/cpfmae/:cpfMae', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
app.get('/paciente/cpfpai/:cpfPai', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

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

const ServiceProntuario = httpProxy('http://api_prontuario:3000');
app.get('/prontuario', (req, res, next) => { ServiceProntuario(req, res, next) }); //version

app.post('/prontuario/atendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
app.put('/prontuario/atendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/atendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/atendimento/numero/:numero', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/atendimento/cpf/:cpf', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/atendimento/cnpj/:cnpj', (req, res, next) => { ServiceProntuario(req, res, next) });

app.post('/prontuario/statusatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/statusatendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/statusatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

app.post('/prontuario/tipoatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/tipoatendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });
app.get('/prontuario/tipoatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

//version Gateway
app.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API de Gateway do Prontuário Eletrônico",
        version: "1.0.0.0"
    })
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = http.createServer(app);
server.listen(port);
console.log('API Gateway rodando na porta ' + port);

