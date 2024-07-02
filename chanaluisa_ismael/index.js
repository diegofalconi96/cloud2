// importar librerias 
const express = require('express');
const knex = require('./db'); // llamado a conf de db
const router = require('./routes'); // llamado a rutas

const app = express(); // creamos una nueva instancia de Express
const port = 3000; // puerto de salida

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Middleware para manejar las rutas bajo el prefijo '/api'
app.use('/api', router);

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
