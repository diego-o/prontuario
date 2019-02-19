'use strict'
exports.appConfig = {
    TipoOrganizacao: {
        route: "./routes/TipoOrganizacaoRoute",
        model: "./models/TipoOrganizacaoModel"        
    },
    Organizacao: {
        route: "./routes/OrganizacaoRoute",
        model: "./models/OrganizacaoModel"
    },
    Medico: {
        route: "./routes/MedicoRoute",
        model: "./models/MedicoModel"
    },
    Enfermeiro: {
        route: "./routes/EnfermeiroRoute",
        model: "./models/EnfermeiroModel"
    },
    Agente: {
        route: "./routes/AgenteRoute",
        model: "./models/AgenteModel"
    }
}

exports.addRoute = function(App, Config) {
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://diego:diego123@ds113495.mlab.com:13495/cadastro-organizacao');

    //usar com Docker
    //mongoose.connect('mongodb://cadastro_organizacao_db/base_cadastro_organizacao');
}
