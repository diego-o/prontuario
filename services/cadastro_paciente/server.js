'use strict'

const app = require('./src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = process.env.PORT || 3002;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API Cadastro Paciente rodando na porta ' + port); 

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port == 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated probileges');
            process.exit(1);
            breask;
        case 'EADDRIUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind  = typeof addr == 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}