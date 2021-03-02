const yargs = require('yargs');
const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivoAsync( argv.b, argv.l, argv.h )
    .then( salida => { console.log(salida.rainbow) })
    .catch( err => console.log(err) );


