//llamado a la libreria
const express = require('express')
const knex = require('./db')//llamado a la configuracion de la base de datos
const router = require('./routers') //llamsdo a las rutas

const app = express();//creamos una nueva instancia
const port = 3000; //puerto de salida

app.use(express.json());
app.use('/api', router);

app.listen(port,() => {
    console.log(`servidor corriendo en el puerto ${port}`)
})