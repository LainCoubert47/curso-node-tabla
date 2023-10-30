const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un Number';
        }else if( isNaN(argv.h)){
            throw 'El ultimo factor de la tabla tiene que ser un Number';
        }
        return true;
    })
    .option('l',{
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Ultimo factor de la tabla'
    })
    .argv; 

module.exports = argv;