'use strict';

const http = require('http');

const BaseUrlPaciente = "http://api_paciente:3000/";

exports.Get = async (endpoint, callback) => {
    http.get(BaseUrlPaciente + endpoint, (res) => {
        let rawData = "";
        res.on('data', (data) => { rawData += data; });
        res.on('end', () => {
            try {
                if (rawData !== ""){
                    var object = JSON.parse(rawData);
                    if (object._id != undefined){
                        callback(object);
                    } else {
                        callback(null);
                    }
                } else {
                    callback(null);
                }
            } catch {
                callback(null);
            }
        });
    });
}