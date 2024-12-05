// importar librerias 
const express = require('express');
const knex = require('./db')
const routes = require('./routes'); //  llamando rutas

const app = express(); //Creamos una nueva instancia
const port = 3000;     //puerto de salida

app.use(express.json());   //confiura tipo de dato json

app.use('/api', routes);  //configura la url base y rutas

app.listen(port, () => {           //Ejecuta ls spi pot rl purtyo 3000
    console.log(`Servidor corriendo en el puerto ${port}`)
})