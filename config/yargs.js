const colors = require('colors');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number', 
                    description: 'Base de la tabla de multiplicar'.green,
                    default: 0,
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean', 
                    description: 'Mostrar tabla de multiplicar en pantalla'.green,
                    default: false,
                    demandOption: true

                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number', 
                    description: 'Longitud de la tabla de multiplicar'.green,
                    default: 10,
                    demandOption: false

                })                
                .check( (argv, options) => {
                    if (isNaN( argv.b)){
                        throw 'La base ha de ser un número'.red;
                    }
                    if (isNaN( argv.h)){
                        throw 'La longitud de la tabla ha de ser un número'.red;
                    }
                    return true;
                })
                .argv;

module.exports = argv;
