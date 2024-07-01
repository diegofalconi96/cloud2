// importar librerias 
const express = require('express');
const knex=require('./db') //llamado a la configuracion de la base de datos 
const routes =require('./routes') //llamado a las rutas

const app= express(); //creamos nueva instancia 
const port = 3000; //puerto de salida

app.use(express.json()); //configurar tipo de dato json

app.use('/api', routes); //configurar la url  base rutas
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})