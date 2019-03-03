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
     *     Organizacao:
     *       properties:
     *         tipo: 
     *           type: string
     *         cnpj:
     *           type: string
     *         razao:
     *           type: string
     *         fantasia:
     *           type: string
     *         inscricaoEstadual:
     *           type: string
     *         inscricaoMunicipal:
     *           type: string
     *         site:
     *           type: string
     *         logo:
     *           type: string
     *           format: binary
     *         ativo:
     *           type: boolean
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
     *     
     *     Carteira:
     *       properties:
     *         numero:
     *           type: integer
     *         paciente:
     *           type: object
     *           properties:
     *             idPaciente:
     *               type: string
     * 
     *     CarteiraVacina:
     *       properties:
     *         carteira: 
     *           type: string
     *         vacina:
     *           type: object
     *           properties:
     *             vacina:
     *               type: string
     *             dataPrevista:
     *               type: string
     *               format: date
     *             dataAplicacao:
     *               type: string
     *               format: date
     *         organizacao:
     *           type: object
     *           properties:
     *             idOrganizacao:
     *               type: string
     *     
     *     Vacina:
     *       properties:
     *         codigo:
     *           type: integer
     *         nome:
     *           type: string
     *         descricao:
     *           type: string
     * 
     *     StatusAtendimento:
     *       properties:
     *         status:
     *           type: string
     *         descricao:
     *           type: string
     *    
     *     TipoAtendimento:
     *       properties:
     *         tipo:
     *           type: string
     *         descricao:
     *           type: string
     * 
     *     Atendimento:
     *       properties:
     *         tipo:
     *           type: string
     *         status:
     *           type: string
     *         dataPrevista:
     *           type: string
     *           format: date
     *         dataAtendimento: 
     *           type: string
     *           format: date
     *         descricao:
     *           type: string
     *         paciente:
     *           type: object
     *           properties:
     *             idPaciente:
     *               type: string
     *         organizacao:
     *           type: object
     *           properties:
     *             idOrganizacao:
     *               type: string
     *         medico:
     *           type: object
     *           properties:
     *             idMedico:
     *               type: string
    */

    //version Gateway
    app.route('/').get((req, res, next) => {
        res.status(200).send({
            title: "API de Gateway do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}