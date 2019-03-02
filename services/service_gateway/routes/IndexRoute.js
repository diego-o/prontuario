'use strict';

exports.Add = function(app) {
    /**
     * @swagger
     * components:
     *   schemas:
     *     Paciente:
     *       properties:
     *         nome:
     *           type: string
     *         cpf:
     *           type: string
     *         rg:
     *           type: string
     *         carteiraSus:
     *           type: string
     *         sexo:
     *           type: string
     *         dataNascimento:
     *           type: string
     *           format: date
     *         dataObito:
     *           type: string
     *           format: date
     *         telefone:
     *           type: string
     *         pai:
     *           type: object
     *           properties:
     *             nome:
     *               type: string
     *             cpf:
     *               type: string
     *             telefone:
     *               type: string
     *         mae:
     *           type: object
     *           properties:
     *             nome:
     *               type: string
     *             cpf:
     *               type: string
     *             telefone:
     *               type: string
     *         endereco:
     *           type: object
     *           properties:
     *             nascimento:
     *               type: object
     *               properties:
     *                 cep:
     *                   type: string
     *                 logradouro:
     *                   type: string
     *                 numero:
     *                   type: string
     *                 bairro:
     *                   type: string
     *                 municipio:
     *                   type: string
     *                 uf:
     *                   type: string
     *             atual:
     *               type: object
     *               properties:
     *                 cep:
     *                   type: string
     *                 logradouro:
     *                   type: string
     *                 numero:
     *                   type: string
     *                 bairro:
     *                   type: string
     *                 municipio:
     *                   type: string
     *                 uf:
     *                   type: string
     * 
     *     Medico:
     *       properties:
     *         crm:
     *           type: object
     *           properties:
     *             numero:
     *               type: string
     *             uf: 
     *               type: string
     *         nome:
     *           type: string
     *         cpf:
     *           type: string
     *         endereco:
     *           type: object
     *           properties:
     *             cep:
     *               type: string
     *             logradouro:
     *               type: string
     *             numero:
     *               type: string
     *             bairro:
     *               type: string
     *             municipio:
     *               type: string
     *             uf:
     *               type: string
     *         contato:
     *           type: object
     *           properties:
     *             telefone:
     *               type: string
     *             email:
     *               type: string
     *         ativo:
     *           type: boolean
     * 
     *     TipoOrganizacao:
     *       properties:
     *         codigo:
     *           type: integer
     *         tipo:
     *           type: string
     *      
     *     ArrayOfTipoOrganizacao:
     *       properties:
     *         type: array
     *         items:
     *           $ref: '#/paths/components/schemas/TipoOrganizacao'
    */

    //version Gateway
    app.route('/').get((req, res, next) => {
        res.status(200).send({
            title: "API de Gateway do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}