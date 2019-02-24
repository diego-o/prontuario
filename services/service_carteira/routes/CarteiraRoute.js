'use strict';

module.exports = function(app) {
    var Controller = require('../controller/CarteiraController');

    app.route('/carteira').post(Controller.Insert);
    app.route('/carteira/:id').get(Controller.GetById);
    app.route('/carteira/numero/:numero').get(Controller.GetByNumero);
    app.route('/carteira/cpf/:cpf').get(Controller.GetByCpf);
    
    //version
    app.route('/carteira').get((req, res, next) => {
        res.status(200).send({
            title: "API de Carteira de Vacinação do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}