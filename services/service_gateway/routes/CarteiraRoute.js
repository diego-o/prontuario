'use strict';

const httpProxy = require('express-http-proxy');

exports.Add = function(app){
    const ServiceCarteira = httpProxy('http://api_carteira:3000');
    app.get('/carteira', (req, res, next) => { ServiceCarteira(req, res, next) }); //version

    /**
     * @swagger
     * /carteira/vacina:
     *   post:
     *     tags:
     *       - Vacina
     *     description: Inserir nova Vacina
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Vacina
     *         description: Objeto Vacina
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Vacina'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/carteira/vacina', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira/vacina/{id}:
     *   put:
     *     tags: 
     *       - Vacina
     *     description: Atualizar uma Vacina
     *     produces: 
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *       - name: vacina
     *         description: Objeto Vacina
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Vacina'
     *     responses:
     *       200:
     *         description: Successfully updated
     */
    app.put('/carteira/vacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    
    /**
     * @swagger
     * /carteira/vacina:
     *   get:
     *     tags:
     *       - Vacina
     *     description: Lista todas Vacinas
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Array de Vacina
     *         schema:
     *           $ref: '#/paths/components/schemas/Vacina'
     */
    app.get('/carteira/vacina', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira/vacina/{id}:
     *   get:
     *     tags:
     *       - Vacina
     *     description: Consultar Vacina por id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Vacina
     */
    app.get('/carteira/vacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira/vacina/codigo/{codigo}:
     *   get:
     *     tags:
     *       - Vacina
     *     description: Consultar Vacina por codigo
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: codigo
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Vacina
     */
    app.get('/carteira/vacina/codigo/:codigo', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira:
     *   post:
     *     tags:
     *       - Carteira
     *     description: Inserir nova Carteira de Vacina
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: carteira
     *         description: Objeto Carteira
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/Carteira'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/carteira', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira/{id}:
     *   get:
     *     tags:
     *       - Carteira
     *     description: Consultar Carteira
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Carteira
     */
    app.get('/carteira/:id', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira/numero/{numero}:
     *   get:
     *     tags:
     *       - Carteira
     *     description: Consultar Carteira
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: numero
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Carteira
     */
    app.get('/carteira/numero/:numero', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteira/cpf/{cpf}:
     *   get:
     *     tags:
     *       - Carteira
     *     description: Consultar Carteira pelo Cpf do Paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpf
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto Carteira
     */
    app.get('/carteira/cpf/:cpf', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteiravacina:
     *   post:
     *     tags:
     *       - CarteiraVacina
     *     description: Inserir nova vacina na Carteira de Vacina
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: carteiraVacina
     *         description: Objeto CarteiraVacina
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/CarteiraVacina'
     *     responses:
     *       200:
     *         description: Successfully created
     */
    app.post('/carteiravacina', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteiravacina/{id}:
     *   put:
     *     tags: 
     *       - CarteiraVacina
     *     description: Atualizar uma CarteiraVacina
     *     produces: 
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *       - name: carteiraVacina
     *         description: Objeto CarteiraVacina
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/paths/components/schemas/CarteiraVacina'
     *     responses:
     *       200:
     *         description: Successfully updated
     */
    app.put('/carteiravacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });
    app.get('/carteiravacina', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteiravacina/{id}:
     *   get:
     *     tags:
     *       - CarteiraVacina
     *     description: Consultar CarteiraVacina pelo id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto CarteiraVacina
     */
    app.get('/carteiravacina/:id', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteiravacina/numerocarteira/{numerocarteira}:
     *   get:
     *     tags:
     *       - CarteiraVacina
     *     description: Consultar CarteiraVacina pelo numero da carteira
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: numerocarteira
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto CarteiraVacina
     */
    app.get('/carteiravacina/numerocarteira/:numerocarteira', (req, res, next) => { ServiceCarteira(req, res, next) });

    /**
     * @swagger
     * /carteiravacina/cpf/{cpf}:
     *   get:
     *     tags:
     *       - CarteiraVacina
     *     description: Consultar CarteiraVacina pelo CPf do paciente
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: cpf
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Objeto CarteiraVacina
     */
    app.get('/carteiravacina/cpf/:cpf', (req, res, next) => { ServiceCarteira(req, res, next) });

    
}