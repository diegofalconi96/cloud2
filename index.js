// importar librerias
const express = require('express'); // llamado al framewor de desarrollo
const knex = require('./db'); // llamado a conf de bd
const routes =require('./routes') // llamdo de rutas

const app = express(); //creamos una nueva instancia
const port = 3000; //puerto de salida

app.use(express.json()); //configura tipo de dato json

app.use('/api',routes); //configura la url base y rutas

app.listen(port,()=>{ //ejecuta la api por el puerto 3000
    //luego de ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`)
})


