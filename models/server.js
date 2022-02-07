const cors = require('cors');
const express = require('express');
const { socketController } = require('../sockets/controller');

class Server {

    constructor () {
        this.app    = express ();
        this.port   = process.env.PORT;
        this.server = require('http').createServer ( this.app );
        this.io     = require('socket.io')( this.server );

        this.middleware ();
        this.routes (); 

        this.sockets ();
    }

    middleware () {
        this.app.use (cors());
        this.app.use ( express.static ('public'));
    }

    routes () {
        // this.app.use (this.path.auth, require ('../routers/auth'));
    }

    sockets () {
        this.io.on ('connection', socketController);
    }

    listen () {
        this.server.listen(this.port, ()=> {
            console.log ('Servidor arriba escuchando en el puerto: ', this.port);
        });
    }

}

module.exports = Server;