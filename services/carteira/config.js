'use strict';

exports.appConfig = {
    Vacina: {
        route: "./routes/VacinaRoute",
        model: "./models/VacinaModel"
    },
    Carteira: {
        route: "./routes/CarteiraRoute",
        model: "./models/CarteiraModel"
    },
    CarteiraVacina: {
        route: "./routes/CarteiraVacinaRoute",
        model: "./models/CarteiraVacinaModel"
    }
}

exports.addRoute = function(App, Config){
    var Model = require(Config.model);
    var Route = require(Config.route);
    Route(App);
}

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    //Mongoose.connect('mongodb://diego:diego123@ds135757.mlab.com:35757/carteira');

    //usar com Docker
    Mongoose.connect('mongodb://carteira_db/db_carteira', { useNewUrlParser: true });
}