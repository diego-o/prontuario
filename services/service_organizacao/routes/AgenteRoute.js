'use strict';

module.exports = function(app) {
    var Controller = require('../controller/AgenteController');

    app.route('/organizacao/agente')
        .post(Controller.Insert);

    app.route('/organizacao/agente/:id')
        .get(Controller.GetById)
        .put(Controller.Update);

        app.route('/organizacao/agente/cpf/:cpf').get(Controller.GetByCpf);
}