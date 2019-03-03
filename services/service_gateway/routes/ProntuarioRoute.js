'use strict';
const httpProxy = require('express-http-proxy');

exports.Add = function(app){
    const ServiceProntuario = httpProxy('http://api_prontuario:3000');
    app.get('/prontuario', (req, res, next) => { ServiceProntuario(req, res, next) }); //version

    /**
     * @swagger
     * /prontuario/statusatendimento:
     *   post:
     *     tags:
     *       - StatusAtendimento
     *     description: Inserir novo status
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: statusAtendimento
     *         description: Objeto StatusAtendimento
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/StatusAtendimento'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/prontuario/statusatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/statusatendimento/{id}:
     *   get:
     *     tags:
     *       - StatusAtendimento
     *     description: Consultar StatusAtendimento por id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto StatusAtendimento
     */
    app.get('/prontuario/statusatendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/statusatendimento:
     *   get:
     *     tags:
     *       - StatusAtendimento
     *     description: Lista todos Status
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Array de StatusAtendimento
     *         schema:
     *           $ref: '#/paths/components/schemas/StatusAtendimento'
     */
    app.get('/prontuario/statusatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/tipoatendimento:
     *   post:
     *     tags:
     *       - TipoAtendimento
     *     description: Inserir novo Tipo
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: tipoAtendimento
     *         description: Objeto TipoAtendimento
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/TipoAtendimento'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/prontuario/tipoatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/tipoatendimento/{id}:
     *   get:
     *     tags:
     *       - TipoAtendimento
     *     description: Consultar TipoAtendimento por id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto TipoAtendimento
     */
    app.get('/prontuario/tipoatendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/tipoatendimento:
     *   get:
     *     tags:
     *       - TipoAtendimento
     *     description: Lista todos Tipos
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Array de TipoAtendimento
     *         schema:
     *           $ref: '#/paths/components/schemas/TipoAtendimento'
     */
    app.get('/prontuario/tipoatendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/atendimento:
     *   post:
     *     tags:
     *       - Atendimento
     *     description: Inserir novo Atendimento
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: atendimento
     *         description: Objeto Atendimento
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Atendimento'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/prontuario/atendimento', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/atendimento/{id}:
     *   put:
     *     tags: 
     *       - Atendimento
     *     description: Atualizar um Atendimento
     *     produces: 
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *       - name: atendimento
     *         description: Objeto Atendimento
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Atendimento'
     *     responses:
     *       200:
     *         description: Successfully updated
     */
    app.put('/prontuario/atendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/atendimento/{id}:
     *   get:
     *     tags:
     *       - Atendimento
     *     description: Consultar Atendimento por id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Atendimento
     */
    app.get('/prontuario/atendimento/:id', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/atendimento/numero/{numero}:
     *   get:
     *     tags:
     *       - Atendimento
     *     description: Consultar Atendimento por numero
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: numero
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Atendimento
     */
    app.get('/prontuario/atendimento/numero/:numero', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/atendimento/cpf/{cpf}:
     *   get:
     *     tags:
     *       - Atendimento
     *     description: Consultar Atendimento pelo cpf do paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpf
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Atendimento
     */
    app.get('/prontuario/atendimento/cpf/:cpf', (req, res, next) => { ServiceProntuario(req, res, next) });

    /**
     * @swagger
     * /prontuario/atendimento/cnpj/{cnpj}:
     *   get:
     *     tags:
     *       - Atendimento
     *     description: Consultar Atendimento pelo cnpj da organização de atendimento
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cnpj
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Atendimento
     */
    app.get('/prontuario/atendimento/cnpj/:cnpj', (req, res, next) => { ServiceProntuario(req, res, next) });
}