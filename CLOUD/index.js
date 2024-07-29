//llamado a la libreria
var createError = require('http-errors');
const express = require('express')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const knex = require('./db') //llamado a la configuracion de la base de datos
const router = require('./routers') //llamado a las rutas

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
};

const app = express(); //creamos una nueva instancia
const port = 3000; //puerto de salida

app.use(express.json());
app.use(cors(config.application.cors.server));
app.use('/api', router);

app.listen(port,() => {
    console.log(`servidor corriendo en el puerto ${port}`)
});
