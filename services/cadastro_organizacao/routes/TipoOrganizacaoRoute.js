'use strict';

module.exports = function(app) {
    var Controller = require('../controller/TipoOrganizacaoController');

    app.route('/organizacao').get((req, res, next) => {
        res.status(200).send({
            title: "API de Cadastro de Pacinetes do ProntuÃ¡rio EletrÃ´nico",
            version: "1.0.0.0"
        })
    });
}