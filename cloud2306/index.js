//importar librerias 
const express = require('express');
const knex = require('./db'); //llamado a la configuracion de la base de datos 
const routes = require('./routes'); //llamado al archivo de las rutas

const app = express(); //creamos una nueva instancia
const port = 3000; //puerto de salida

//configuracion para ponerlo a funcionar

app.use(express.json());  //configurar tipo de datos json (son los que vamos a usar)

app.use('/api', routes); //configura la url base y rutas

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto  ${port}`) //usar estos simbolos `` para emitir este console log
})

