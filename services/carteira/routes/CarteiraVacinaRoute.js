'use strict';

module.exports = function(app) {
    var Controller = require('../controller/CarteiraVacinaController');

    app.route('/carteiravacina').post(Controller.Insert);
}