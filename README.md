# GestorDeTareasPorConsola
🛠️ E5-M6 Ejercicio
Gestor de Tareas por Consola 📝
Objetivo: Desarrollar una aplicación de línea de comandos (CLI) capaz de interpretar comandos y argumentos pasados desde la terminal. Utilizarás la librería yargs para parsear los argumentos de forma estructurada y el bloque try/catch para gestionar errores de manera robusta y prevenir que la aplicación se cierre inesperadamente.

Instrucciones:

Paso 1: Configuración del Proyecto
Inicializa tu proyecto con npm init -y si no lo has hecho.

Instala Yargs: yargs es un paquete muy popular que nos ayuda a construir CLIs interactivas. Instálalo:

npm install yargs
 
Paso 2: Implementación de la Lógica en app.js
Importa Yargs: Al inicio de tu archivo app.js, importa la librería:

const yargs = require('yargs');
 
Define un Comando: Vamos a crear un comando principal llamado crear. Usaremos el método .command() de yargs.

command: El nombre del comando (ej: 'crear').

describe: Una breve descripción de lo que hace (ej: 'Crea una nueva tarea').

builder: Un objeto que define las "opciones" o "flags" que acepta tu comando. Aquí definiremos la opción --titulo.

handler: La función que se ejecutará cuando se llame al comando crear.

Configura la Opción --titulo: Dentro del builder, configura la opción titulo:

describe: Una descripción para la opción (ej: 'El título de la tarea').

demandOption: true: Esto es clave. Hace que la opción sea obligatoria. Si el usuario no la provee, yargs mostrará un error automáticamente.

type: 'string': Especifica que el valor de esta opción debe ser un texto.

Implementa el handler con try/catch: La función handler recibe un argumento (argv) que contiene todas las opciones parseadas.

Bloque try: Aquí va la "lógica feliz". Asume que todo ha ido bien. Imprime un mensaje de éxito en la consola que incluya el título de la tarea recibido (ej: Tarea "${argv.titulo}" creada exitosamente.).

Bloque catch: Este bloque se ejecutará si ocurre un error inesperado dentro del try. Aunque yargs ya maneja la validación de parámetros, el try/catch es una buena práctica para capturar cualquier otro error de ejecución. Imprime un mensaje de error genérico en la consola (ej: Ha ocurrido un error inesperado.).

Finaliza la Configuración: Al final de tu cadena de yargs, añade .parse() para que yargs procese los argumentos de la línea de comandos.

Paso 3: Ejecución y Pruebas
Abre tu terminal en la carpeta del proyecto y prueba los siguientes casos:

Caso Exitoso: Ejecuta el comando crear con la opción --titulo.

node app.js crear --titulo="Pasear al perro"

 
Deberías ver tu mensaje de éxito.

Caso de Error (Parámetro Faltante): Intenta ejecutar el comando sin la opción obligatoria.

node app.js crear

 
Yargs debería mostrar automáticamente un mensaje de error indicando que la opción titulo es requerida.

Ayuda Integrada: Yargs crea menús de ayuda automáticamente. Pruébalos:

node app.js --help
node app.js crear --help

 
Verás la descripción de tus comandos y opciones, lo que hace tu CLI mucho más profesional.

Conceptos a Aplicar:

Aplicación de Línea de Comandos (CLI): Programas que se ejecutan e interactúan desde una terminal.

process.argv: (Contexto) El array nativo de Node.js que contiene los argumentos de la línea de comandos. Yargs lo utiliza por debajo para facilitar su manejo.

Yargs: Librería para construir CLIs potentes, parsear argumentos y generar menús de ayuda.

.command(): Método para definir un comando.

.option() o builder: Para definir los flags/opciones que un comando acepta.

demandOption: Para hacer una opción obligatoria.

Manejo de Errores: La práctica de anticipar y gestionar errores.

try...catch: La estructura de control de JavaScript para manejar excepciones y errores en tiempo de ejecución, evitando que el programa se detenga bruscamente.

Entrega:

El trabajo deberá ser entregado a través de un repositorio público en GitHub. No olvides el .gitignore. Por favor, comparte únicamente el enlace a dicho repositorio. 📤
