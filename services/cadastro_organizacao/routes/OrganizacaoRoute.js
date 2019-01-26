'use strict';

module.exports = function(app) {
    var Controller = require('../controller/OrganizacaoController');

    app.route('/organizacao/organizacao')
        .post(Controller.Insert)
        .get(Controller.Select);

    app.route('/organizacao/organizacao/:id')
        .put(Controller.Update)
        .get(Controller.GetById);
    
    app.route('/organizacao/organizacao/cnpj/:cnpj').get(Controller.GetByCnpj);
}