'use strict';

module.exports = function(app) {
    var Controller = require('../controller/TipoOrganizacaoController');

    app.route('/organizacao')
        .post(Controller.Insert)
        .get(Controller.Select);

    app.route('/organizacao/version').get((req, res, next) => {
        res.status(200).send({
            title: "API de Cadastro de Pacinetes do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}