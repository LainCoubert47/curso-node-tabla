const fs = require('node:fs');

const crearArchivoTabla = async (base=0, listar=false, hasta=10)=>{ 

    try {
        //return new Promise((resolve, rejects)=>{
            let salida = '';
            let salidaClg = '';
            
            for (let i = 1; i <= hasta; i++) {
                salida += `${i} x ${base} = ${i*base}\n`;    
                salidaClg += `${i}`.blue + `x`.red + `${base}`.blue + `=`.red + `${i*base}\n`.blue;    
                
            }
            if(listar){
            console.log("===================".green);
            console.log(`   ${'Tabla del:'.green}` +` ${base}`.blue);
            console.log("===================".green);
                console.log(salidaClg);
            }
            // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
                //     if (err) throw err;
                //     console.log(`labla-${base}.txt creado`);
                // })
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            return `tabla-${base}.txt`;
        //}
    } catch (error) {
        throw `No se ha podido crear la tabla-${base}.txt`;
    }
}
        
module.exports = {
    crearArchivoTabla
}