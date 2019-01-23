'use strict'
exports.appConfig = {
    TipoOrganizacao: {
        route: "./routes/TipoOrganizacaoRoute",
        model: "./models/TipoOrganizacaoModel"
    }
}

exports.addRoute = function(App, Config) {
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://diego:diego123@ds255784.mlab.com:55784/cadastro-paciente');

    //usar com Docker
    //mongoose.connect('mongodb://cadastro_paciente_db/base_cadastro_paciente');
}