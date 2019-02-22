'use strict';

module.exports = function(app){
    var Controller = require('../controller/AtendimentoController');

    app.route('/prontuario/atendimento').post(Controller.Insert);

    app.route('/prontuario/atendimento/:id').get(Controller.GetById);
    app.route('/prontuario/atendimento/numero/:numero').get(Controller.GetByNumero);
    app.route('/prontuario/atendimento/cpf/:cpf').get(Controller.GetByCpfPaciente);
    app.route('/prontuario/atendimento/cnpj/:cnpj').get(Controller.GetByCnpjOrganizacao);

    //version
    app.route('/prontuario').get((req, res, next) => {
        res.status(200).send({
            title: "API de Prontuário do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}