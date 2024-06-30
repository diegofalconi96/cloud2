// Importar librerias
const express = require('express');
//Llamado al archivo de conexion
const knex = require('./db');
//Llamado al acrchivo de las rutas
const routes = require('./routers');
const app = express(); //Crear una nueva instancia
const port = 3000; // Puerto de salida

app.use(express.json()); //Configurar tipo de dato JSON

app.use('/api', routes); //Configura la url base y rutas

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
})