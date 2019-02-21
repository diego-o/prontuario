'use strict';

const http = require('http');

const BaseUrl = "http://localhost:3001/";

exports.Get = async (endpoint, callback) => {
    http.get(BaseUrl + endpoint, (res) => {
        let rawData = "";
        res.on('data', (data) => { rawData += data; });
        res.on('end', () => {
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
        });
    });
}