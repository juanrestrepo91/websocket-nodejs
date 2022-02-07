const socket = io ();

const lblonline  = document.querySelector ('#lblOnline');
const lbloffline = document.querySelector ('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on ('connect', () => {
    lbloffline.style.display = 'none';
    lblonline.style.display  = '';
});

socket.on ('disconnect', () => {
    lblonline.style.display = 'none';
    lbloffline.style.display = '';
})

socket.on ('enviar-mensaje', (payload) => {
    console.log (payload);
});

btnEnviar.addEventListener ('click', () => {

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '1233ABV',
        fecha: new Date ().getTime () 
    }

    socket.emit ('enviar-mensaje', payload, ( id ) => {
        console.log ('Desde el server', id);
    });

    // ( payload, callback ) => {
    //     const id = 123456;
    //     callback ({id, fecha: new Date ().getTime () });
    // }
})