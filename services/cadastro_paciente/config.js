'use strict'
exports.appConfig = {
    Paciente : {
        route: "./routes/PacienteRoute",
        model: "./models/PacienteModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://diego:diego123@ds255784.mlab.com:55784/cadastro-paciente', { useNewUrlParser: true });

    //usar com Docker
    //Mongoose.connect('mongodb://cadastro_paciente_db/db_cadastro_paciente', { useNewUrlParser: true });
}