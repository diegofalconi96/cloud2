//llamado a la libreria
var createError = require('http-errors');
const express = require('express')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
<<<<<<< HEAD

const knex = require('./db')//llamado a la configuracion de la base de datos
const router = require('./routers') //llamsdo a las rutas

=======

const knex = require('./db') //llamado a la configuracion de la base de datos
const router = require('./routers') //llamado a las rutas

>>>>>>> origin/romel_ante
const config = {
    application: {
        cors: {
            server: [
                {
<<<<<<< HEAD
                    origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
=======
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
>>>>>>> origin/romel_ante
                    credentials: true
                }
            ]
        }
    }
};

<<<<<<< HEAD
const app = express();//creamos una nueva instancia
const port = 3001; //puerto de salida
=======
const app = express(); //creamos una nueva instancia
const port = 3000; //puerto de salida
>>>>>>> origin/romel_ante

app.use(express.json());
app.use(cors(config.application.cors.server));
app.use('/api', router);


app.listen(port,() => {
    console.log(`servidor corriendo en el puerto ${port}`)
<<<<<<< HEAD
})


=======
});
>>>>>>> origin/romel_ante
