# Tabla de multiplicar CLI

Esta es una aplicación de línea de comandos (CLI) que permite crear tablas de multiplicar en formato de archivo de texto. La aplicación está construida en Node.js y utiliza el paquete yargs para interpretar los argumentos de línea de comandos. También utiliza el paquete npm colors para agregar estilo a la consola y el módulo file system de Node.js para la creación de archivos .txt que se guardarán en la carpeta resultados.

##Instalación

Para instalar la aplicación, primero clona este repositorio en tu máquina local. Asegúrate de tener Node.js instalado. Luego, abre una terminal y navega hasta la carpeta del repositorio. Ejecuta el siguiente comando:

**npm install**

Esto instalará todas las dependencias necesarias para ejecutar la aplicación.

##Uso

Para utilizar la aplicación, abre una terminal y navega hasta la carpeta del repositorio. Ejecuta el siguiente comando:

**node app.js --b [-base] --h [-hasta] --l**

Reemplaza [base] con el número de la tabla de multiplicar que deseas crear y [hasta] con el número máximo para el que deseas crear la tabla. El comando --l o -listado es opcional. Si se incluye, se mostrará la tabla en la consola. Si no se incluye, se creará un archivo de texto con el nombre tabla-[base]-al-[limite].txt en la carpeta resultados.

Por ejemplo, para crear la tabla de multiplicar del 5 hasta el 10 y mostrarla en la consola, ejecuta el siguiente comando:

**node app.js  -base 3 -hasta 10 --l**

Esto generará una tabla de multiplicar en la consola.

Si deseas crear una tabla de multiplicar y guardarla en un archivo de texto, pero no quieres verla en la consola, simplemente omite el comando --l o -listado.

##Tecnologías utilizadas:

- Node.js
- yargs
- colors
- file system

###¡Gracias por tomarte el tiempo de leer este archivo README! Espero que te haya resultado útil y que te haya dado una buena idea de lo que hace mi proyecto. Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo.

