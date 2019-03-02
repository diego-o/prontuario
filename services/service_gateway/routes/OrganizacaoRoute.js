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

    /**
     * @swagger
     * /organizacao/medico:
     *   post:
     *     tags:
     *       - Medico
     *     description: Inserir novo Medico
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: medico
     *         description: Objeto Medico
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Medico'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/organizacao/medico', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    /**
     * @swagger
     * /organizacao/medico/{id}:
     *   put:
     *     tags: 
     *       - Medico
     *     description: Atualizar um Medico
     *     produces: 
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *       - name: medico
     *         description: Objeto Medico
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Medico'
     *     responses:
     *       200:
     *         description: Successfully updated
     */
    app.put('/organizacao/medico/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    /**
     * @swagger
     * /organizacao/medico/{id}:
     *   get:
     *     tags:
     *       - Medico
     *     description: Consultar Medico pelo id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Medico
     */
    app.get('/organizacao/medico/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    /**
     * @swagger
     * /organizacao/medico/crm/{crm}:
     *   get:
     *     tags:
     *       - Medico
     *     description: Consultar Medico pelo crm
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: crm
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Medico
     */
    app.post('/organizacao/medico/crm', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    /**
     * @swagger
     * /organizacao/medico/cpf/{cpf}:
     *   get:
     *     tags:
     *       - Medico
     *     description: Consultar Medico pelo cpf
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpf
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Medico
     */
    app.get('/organizacao/medico/cpf/:cpf', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    app.post('/organizacao/organizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/organizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.put('/organizacao/organizacao/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/organizacao/:id', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
    app.get('/organizacao/organizacao/cnpj/:cnpj', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    /**
     * @swagger
     * /organizacao/tipoorganizacao:
     *   post:
     *     tags:
     *       - TipoOrganizacao
     *     description: Inserir novo Tipo de Organização
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: tipoOrganizacao
     *         description: Objeto TipoOrganizacao
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/TipoOrganizacao'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/organizacao/tipoorganizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });

    /**
     * @swagger
     * /organizacao/tipoorganizacao:
     *   get:
     *     tags:
     *       - TipoOrganizacao
     *     description: Lista todos os tipos de organização
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Array de TipoOrganizacao
     *         schema:
     *           $ref: '#/paths/components/schemas/TipoOrganizacao'
     */
    app.get('/organizacao/tipoorganizacao', (req, res, next) => { ServiceCadastroOrganizacao(req, res, next) });
}