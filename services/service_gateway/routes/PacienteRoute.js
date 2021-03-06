'use strict';

const httpProxy = require('express-http-proxy');

exports.Add = function(app) {
    const ServiceCadastroPaciente = httpProxy('http://api_paciente:3000');
    app.get('/paciente', (req, res, next) => { ServiceCadastroPaciente(req, res, next) }); //version

    /**
     * @swagger
     * /paciente:
     *   post:
     *     tags:
     *       - Paciente
     *     description: Inserir novo Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: paciente
     *         description: Objeto Paciente
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Paciente'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/paciente', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

    /**
     * @swagger
     * /paciente/{id}:
     *   put:
     *     tags: 
     *       - Paciente
     *     description: Atualizar um Paciente
     *     produces: 
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *       - name: paciente
     *         description: Objeto Paciente
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Paciente'
     *     responses:
     *       200:
     *         description: Successfully updated
     */
    app.put('/paciente/:id', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

    /**
     * @swagger
     * /paciente/{id}:
     *   get:
     *     tags:
     *       - Paciente
     *     description: Consultar Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Paciente
     */
    app.get('/paciente/:id', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

    /**
     * @swagger
     * /paciente/cpf/{cpf}:
     *   get:
     *     tags:
     *       - Paciente
     *     description: Consultar Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpf
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Paciente
     */
    app.get('/paciente/cpf/:cpf', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

    /**
     * @swagger
     * /paciente/carteirasus/{carteirasus}:
     *   get:
     *     tags:
     *       - Paciente
     *     description: Consultar Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: carteirasus
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Paciente
     */
    app.get('/paciente/carteirasus/:carteiraSus', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

    /**
     * @swagger
     * /paciente/cpfmae/{cpfmae}:
     *   get:
     *     tags:
     *       - Paciente
     *     description: Consultar Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpfmae
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Paciente
     */
    app.get('/paciente/cpfmae/:cpfMae', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });

    /**
     * @swagger
     * /paciente/cpfpai/{cpfpai}:
     *   get:
     *     tags:
     *       - Paciente
     *     description: Consultar Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpfpai
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Paciente
     */
    app.get('/paciente/cpfpai/:cpfPai', (req, res, next) => { ServiceCadastroPaciente(req, res, next) });
}
