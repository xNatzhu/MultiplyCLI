import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers'
/*La función hideBin de la librería yargs/helpers se utiliza para ocultar los primeros dos elementos del arreglo process.argv, que corresponden a la ruta del ejecutable de Node.js y al nombre del archivo actual que se está ejecutando.

Al ocultar estos elementos, yargs puede procesar los argumentos restantes sin incluir los primeros dos que no son relevantes para los argumentos de la línea de comandos. */


const argv = yargs(hideBin(process.argv))
    .option("b",{
        alias:"base",
        type:"number",
        demandOption:"true",
        description:"Es la base de multiplicar.",
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){ //IsNaN es un elemento de javascript que permite comprobar si un valor es un numero o no.
            throw "La base tiene que ser un numero."
        }
        return true; //Para que el chequeo pueda funcionar es necesario que despues de la validacion devuelva un return true.
    })
    .option("l",{
        alias:"listar",
        type:"boolean",
        default:"false",
        description:"Es para mostrar la informacion de la tabla en consola.",
    })
    .option("h",{
        alias:"hasta",
        type:"number",
        default:"10",
        description:"Es para mostrar el limite para multiplicar una tabla.",
    })
    .argv

export default argv