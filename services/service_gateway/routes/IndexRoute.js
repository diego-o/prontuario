'use strict';

exports.Add = function(app) {
    //version Gateway
    app.route('/').get((req, res, next) => {
        res.status(200).send({
            title: "API de Gateway do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}