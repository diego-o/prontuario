'use strict';

module.exports = function(app) {
    var PacienteController = require('../controller/PacienteController');

    app.route('/paciente').post(PacienteController.Insert);
    app.route('/paciente/:id').put(PacienteController.Update);
    app.route('/paciente/:id').get(PacienteController.GetById);

    app.route('/paciente/cpf/:cpf').get(PacienteController.GetByCpf);
    app.route('/paciente/carteirasus/:carteiraSus').get(PacienteController.GetByCarteiraSus);
    app.route('/paciente/cpfmae/:cpfMae').get(PacienteController.GetByCpfMae);
    app.route('/paciente/cpfpai/:cpfPai').get(PacienteController.GetByCpfPai);

    //version
    app.route('/paciente').get((req, res, next) => {
        res.status(200).send({
            title: "API de Cadastro de Pacinetes do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}