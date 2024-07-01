// importar librerias 

const express = require('express') // Framework de desarrollo
const knex = require('./db'); //llamado a configuracion de la carpeta db
const routers = require('./routes'); // llamado de rutas (obtener conexión)

// Declarar una variable

const app = express(); // creamos una nueva instancia
const port = 3000; // Puerto de salida, generalmente trabaja con el puerto 3000

// tipo de datos que vamos a utilizar

app.use(express.json()); // configurar tipo de dato json
app.use('/api', routers); // configura la url base y rutas

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} con éxito`)
})