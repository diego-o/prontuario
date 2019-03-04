'use strict'

exports.configDB = function(Mongoose) {
    Mongoose.Promise = global.Promise;
    //Mongoose.connect('mongodb://diego:diego123@ds255784.mlab.com:55784/cadastro-paciente', { useNewUrlParser: true });

    //usar com Docker
    Mongoose.connect('mongodb://db_autenticacao/database_autenticacao', { useNewUrlParser: true });
}