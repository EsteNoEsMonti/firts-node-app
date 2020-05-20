let url = 'http://myurl.com';

log = (message1, message2) => {
    console.log(message1, message2);
};

// lo que haremos es que la aplicacion principal (app.js) llame a este modulo, le pase una variable por parametro
// que seria el msj y que lo imporma, para hacer esto usando el tema de modulos, hay que exportar esto
// module.exports.url = url;
module.exports.log = log;

//y ya del otro lado somos caopaces de hacer un import.
