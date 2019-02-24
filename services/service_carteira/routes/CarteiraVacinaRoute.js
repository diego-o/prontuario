'use strict';

module.exports = function(app) {
    var Controller = require('../controller/CarteiraVacinaController');

    app.route('/carteiravacina')
        .post(Controller.Insert)
        .get(Controller.GetAll);

    app.route('/carteiravacina/:id')
        .get(Controller.GetById)
        .put(Controller.Update);

    app.route('/carteiravacina/numerocarteira/:numero').get(Controller.GetByNumeroCarteira);
}