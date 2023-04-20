import * as fs from 'node:fs/promises';
import colors from "colors"
export default function CrearArchivo(base = 5, listado, hasta) { //si la persona no me manda la base se le asigna un 5 como default

    return new Promise((resolve, reject) => {
        let salida = "";

        for (let index = 1; index <= hasta; index++) {
            let multiplicar = base * index;
            salida += `${base} x ${index} = ${multiplicar} \n`;
        }
    
        //FILE SYSTEM
    
        //recibe 3 parametros.
        //1. El formato del archivo que va escribir.
        // 2. La informacion que va escribir
        // 3. Un callback que si sucede algun error lo ejecuta.
    
        fs.writeFile(`./resultado/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`La tabla del ${base} se pudo crear.`);
        });
        
        if(listado==true){
            console.log("===================================");
            console.log(colors.zebra(`   TABLA DE MULTIPLICAR -  ${base}   `));
            console.log("===================================");
            console.log(colors.rainbow(salida));
        }

        resolve(`tabla-${base}.txt`, salida);
        
        
    })

}

/*Para la exportacion del modulo utilice directamente export default
pero se podria utilizar module.export ={
    CreArchivo
}
Hay dos formas validas de hacerlo: require/module.exports,

Y la segunda: import/export
*/
