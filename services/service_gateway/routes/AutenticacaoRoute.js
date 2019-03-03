'use strict';

exports.Add = function(app) {
    var ControllerPaciente = require('../autenticacao/controller/PacienteController');

    app.route('/auth/paciente').post(ControllerPaciente.Insert);
    app.route('/auth/paciente').put(ControllerPaciente.Update);
    app.route('/auth/paciente/login').post(ControllerPaciente.Login);
}