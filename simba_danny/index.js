//importar librerias 
const express = require('express');
const knex=require('./db')//llama la conf de db
const routes=require('./routes')//llamada a routes

const app=express();//creamos nueva instancia 
const port=3000;//puerto de salida

app.use(express.json());//configura tipo json

app.use('/api',routes);//configura la url base y rutas

app.listen(port, ()=>{//ejecuta la api po el puerto 3000
    //mensaje 
    console.log(`Servidor corriendoen el puerto ${port}`);
})