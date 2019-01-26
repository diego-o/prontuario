'use strict';

module.exports = function(app) {
    var Controller = require('../controller/MedicoController');

    app.route('/organizacao/medico').post(Controller.Insert);
    
    app.route('/organizacao/medico/:id')
        .get(Controller.GetById)
        .put(Controller.Update);

    app.route('/organizacao/medico/crm').post(Controller.GetByCrm);

    app.route('/organizacao/medico/cpf/:cpf').get(Controller.GetByCpf);
}