import CrearArchivo from './helpers/multiplicar.js'
import argv from "./yargs/yargs.js"
import colors from "colors"

CrearArchivo(argv.b, argv.l, argv.h)
    .then((archivoNombre)=>{
        console.log(colors.america(archivoNombre + " Creado"));
    })
    .catch((err)=>{
        console.log(err);
    })
