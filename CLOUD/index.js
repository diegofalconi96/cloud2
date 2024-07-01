const express = require('express');
const knex  = require('./db'); // Llamado a la configuración de la base de datos (db.js)
const routes = require('./routes'); // Llamado a las rutas configuradas (routes.js)

const app = express(); // Crea una nueva instancia de la aplicación Express
const port = 4000; // Puerto en el que se ejecutará el servidor

app.use(express.json()); // Middleware para manejar JSON en las solicitudes

// Monta las rutas bajo el prefijo '/api'
app.use('/api', routes);

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

