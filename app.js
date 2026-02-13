// Importamos la librería yargs.
// 📚 Materia aplicada: Uso de paquetes externos con require().
// Esto nos permite interpretar comandos y argumentos desde la terminal
// de forma más profesional que usando process.argv manualmente.
const yargs = require('yargs');

// Inicializamos la configuración de comandos de yargs.
// 📚 Materia aplicada: Desarrollo de aplicaciones CLI (Command Line Interface).
// Aquí comenzamos a definir qué comandos podrá ejecutar el usuario desde la terminal.
yargs
  .command({
    // Nombre del comando que el usuario escribirá en la terminal.
    // Ejemplo: node app.js crear --titulo="Estudiar Node"
    command: 'crear',

    // Breve descripción que aparece al usar --help.
    // 📚 Materia aplicada: Buenas prácticas de documentación en CLI.
    describe: 'Crea una nueva tarea',

    // Builder permite definir los argumentos que acompañan al comando.
    // 📚 Materia aplicada: Definición y validación de argumentos.
    builder: {
      titulo: {
        // Describe qué representa el argumento.
        describe: 'El título de la tarea',

        // Obliga al usuario a proporcionar este argumento.
        // 📚 Materia aplicada: Validación de datos de entrada.
        // Esto evita que se creen tareas sin información necesaria.
        demandOption: true,

        // Especifica el tipo de dato esperado.
        // 📚 Materia aplicada: Tipado y control de datos en JavaScript.
        // Garantiza que el valor ingresado sea un string.
        type: 'string'
      }
    },

    // Handler contiene la lógica que se ejecuta cuando el comando es llamado.
    // 📚 Materia aplicada: Separación de responsabilidades.
    // Aquí se ejecuta la acción específica del comando.
    handler: (argv) => {
      try {
        // Lógica principal
        // 📚 Materia aplicada: Uso de parámetros desde la línea de comandos.
        // argv contiene los argumentos procesados por yargs.
        console.log(`Tarea "${argv.titulo}" creada exitosamente.`);

      } catch (error) {
        // Manejo de errores inesperados
        // 📚 Materia aplicada: Manejo de excepciones con try/catch.
        // Esto evita que la aplicación se cierre abruptamente ante un error.
        console.error('Ha ocurrido un error inesperado.');
      }
    }
  })

  // .parse() le indica a yargs que procese los argumentos ingresados
  // en la terminal y ejecute el comando correspondiente.
  // 📚 Materia aplicada: Interpretación y ejecución de comandos CLI.
  .parse();



  
  // Comandos de ejecución  y pruebas
  //------------------------------------------------------------
  //node app.js crear --titulo="Pasear al perro"
  //node app.js crear
  //node app.js --help
  //node app.js crear --help
