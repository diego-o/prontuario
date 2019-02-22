'use strict';

module.exports = function(app) {
    var Controller = require('../controller/TipoAtendimentoController');

    app.route('/prontuario/tipoatendimento')
        .post(Controller.Insert)
        .get(Controller.GetAll);
    
     app.route('/prontuario/tipoatendimento/:id').get(Controller.GetById);
}