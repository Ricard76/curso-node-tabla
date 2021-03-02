const { throws } = require('assert');
const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5 ) => {

    return new Promise((resolve, reject) => {

        salida = 
`=====================\n
     Tabla del ${ base }\n
=====================\n`;
    
        for (let i = 1; i <= 10; i++) {
            salida += `${ base } x ${ i } = ${ base * i}\n`;
        }
    
        salida += `\ntabla-${ base }.txt creado`;
    
        try {
            fs.writeFile(`tabla-${ base }.txt`, salida, () => resolve(salida));    
        } catch (error) {
            reject(error);
        }

    });

};


const crearArchivoAsync = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '';
        let salida_f = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${ colors.blue( base ) } ${'x'.magenta} ${ colors.cyan.bold(i) } ${'='.yellow} ${ colors.green.bold(base * i)}\n`;
            salida_f += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (listar){
            console.log('====================='.blue);
            console.log('     Tabla del '.white, colors.blue(base));
            console.log('====================='.blue);
            console.log( salida );
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida_f);    

        return `tabla-${ base }.txt creado`;

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo, 
    crearArchivoAsync
}