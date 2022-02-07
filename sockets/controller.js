
const socketController = (socket) => {

    console.log ('Cliente desconectado', socket.id);

    socket.on('disconnect', () => { 
        console.log ('Cliente desconectado', socket.id);
    });

    socket.on ('enviar-mensaje', ( payload, callback ) => {
        const id = 123456;
        callback ({id, fecha: new Date ().getTime () });
        
        socket.broadcast.emit ('enviar-mensaje', payload);
    });

        // socket.on ('enviar-mensaje', (payload, callback)=> {

        //     const id = 7890;
        //     callback ({id, fecha: new Date().getTime () });

        // });
}

module.exports = { socketController }