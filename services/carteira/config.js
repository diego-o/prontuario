'use strict';

exports.appConfig = {
    Vacina: {
        route: "./routes/VacinaRoute",
        model: "./models/VacinaModel"
    },
    Carteira: {
        route: "./routes/CarteiraRoute",
        model: "./models/CarteiraModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    Mongoose.connect('mongodb://diego:diego123@ds135757.mlab.com:35757/carteira');

    //usar com Docker
    //mongoose.connect('mongodb://carteira_db/base_carteira');
}