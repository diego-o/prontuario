'use strict';

module.exports = function(app){
    var Controller = require('../controller/VacinaController');

    app.route('/carteira/vacina')
        .post(Controller.Insert)
        .get(Controller.GetAll);
        
    app.route('/carteira/vacina/:id')
        .put(Controller.Update)
        .get(Controller.GetById);

    app.route('/carteira/vacina/codigo/:codigo').get(Controller.GetByCodigo);
}