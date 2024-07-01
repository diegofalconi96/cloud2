//importar librerias 
const express = require('express');
const knex = require('./db'); //llamando al conf de db
const routes = require('./routes'); //llamando rutas

const app = express(); // creamos una nueva instancia
const port = 3000; // puerto de salida

app.use(express.json()); // configurar el tipo de dato json 

app.use('/api', routes) //configurar la url base y rutas

app.listen(port, () => { // ejecuta la api por el puerto 3000
    //luego de ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`)
} )