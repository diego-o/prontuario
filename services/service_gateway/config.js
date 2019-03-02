'use strict';

exports.appConfig = {
    Index: {
        route: "./routes/IndexRoute",
        model: ""
    },
    Organizacao: {
        route: './routes/OrganizacaoRoute',
        model: ""
    }
}

exports.addRoute = function(App, Config){
    var Model = Config.model != "" ? require(Config.model) : null;
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    //Mongoose.Promise = global.Promise;
    //Mongoose.connect('mongodb://diego:diego123@ds163764.mlab.com:63764/prontuario');

    //usar com Docker
    //Mongoose.connect('mongodb://db_prontuario/database_prontuario', { useNewUrlParser: true });
}