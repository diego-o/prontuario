'use strict';

exports.appConfig = {
    StatusAtendimento: {
        route: "./routes/StatusAtendimentoRoute",
        model: "./models/StatusAtendimentoModel"
    },
    TipoAtendimento: {
        route: "./routes/TipoAtendimentoRoute",
        model: "./models/TipoAtendimentoModel"
    },
    Atendimento: {
        route: "./routes/AtendimentoRoute",
        model: "./models/AtendimentoModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://diego:diego123@ds163764.mlab.com:63764/prontuario');

    //usar com Docker
    //mongoose.connect('mongodb://prontuario_db/base_prontuario_db');
}