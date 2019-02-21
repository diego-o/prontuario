'use strict';

module.exports = function(app) {
    var Controller = require('../controller/StatusAtendimentoController');

    app.route('/prontuario/statusatendimento')
        .post(Controller.Insert)
        .get(Controller.GetAll);
    
     app.route('/prontuario/statusatendimento/:id').get(Controller.GetById);
    
    //version
    app.route('/prontuario').get((req, res, next) => {
        res.status(200).send({
            title: "API de Prontuário do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}