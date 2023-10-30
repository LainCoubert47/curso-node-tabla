//const { argv } = require('process');
const argv = require('./config/yargs');
const {crearArchivoTabla} = require('./helpers/multiplicar');
const colors = require('colors');

//console.log(process.argv);
console.log(argv);
//console.log('base: yargs', argv.base);

// const [,,arg3='base=5'] = process.argv;
// const [,base] = arg3.split('=');
//const base = 4;

// const getTabla = async ()=>{
// try {
//     const nombreArchivo = await crearArchivoTabla(base);
//     return nombreArchivo;
// } catch (error) {
//     throw `No se ha podido crear la tabla-${base}.txt`;
// }
//}

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.italic.green, 'creado'.green))
    .catch(err=>console.log(err));