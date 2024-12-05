//importar librerías 
//express es el framework de desarrollo
const express = require('express');
//llamamos al db.js (CONFIGURACIÓN DE LA BASE DE DATOS)
const knex = require('./db');
//llamamos a las rutas (routes.js)
const routes = require('./routes');

//creamos una nueva instancia
const app = express();
//puerto de salida
const port = 3000;

//configura tipo de dato json
app.use(express.json());
//configura la url base y rutas
app.use('/api', routes);  //SIN PUNTO 
//manda un mensaje sobre que puerto estoy 
app.listen(port, ()=>{
    console.log(`Servidor corriendo el el puerto ${port}`);
});