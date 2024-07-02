const express = require('express');
const knex = require('./db');
const routes = require('./routes');

const app = express();
const port = 3000;

// Middleware para imprimir la URL de la solicitud
const logRequestUrl = (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
};

app.use(express.json());

// Usar el middleware antes de agregar las rutas
app.use('/api', logRequestUrl, routes);

app.listen(port, (err) => {
    if (err) {
        return console.error(`Error starting server: ${err}`);
    }
    console.log(`Servidor corriendo en el puerto ${port}`);
});
