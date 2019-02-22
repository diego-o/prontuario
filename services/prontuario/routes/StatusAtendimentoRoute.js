'use strict';

module.exports = function(app) {
    var Controller = require('../controller/StatusAtendimentoController');

    app.route('/prontuario/statusatendimento')
        .post(Controller.Insert)
        .get(Controller.GetAll);
    
     app.route('/prontuario/statusatendimento/:id').get(Controller.GetById);
}