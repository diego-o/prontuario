'use strict';

module.exports = function(app) {
    var Controller = require('../controller/EnfermeiroController');

    app.route('/organizacao/enfermeiro')
        .post(Controller.Insert);

    app.route('/organizacao/enfermeiro/:id')
        .get(Controller.GetById)
        .put(Controller.Update);

        app.route('/organizacao/enfermeiro/cpf/:cpf').get(Controller.GetByCpf);

        app.route('/organizacao/enfermeiro/coren').post(Controller.GetByCoren);
}