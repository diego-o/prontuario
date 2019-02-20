'use strict';

module.exports = function(app) {
    var Controller = require('../controller/CarteiraController');

    app.route('/carteira').post(Controller.Insert);
    
    //version
    app.route('/carteira').get((req, res, next) => {
        res.status(200).send({
            title: "API de Carteira de Vacinação do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}