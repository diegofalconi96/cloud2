const knex = require('knex') //Llamada a la libreria knex
const { Model } = require('objections') //Llamada a modelo de inyeccion
const knexConfig = require('./knexfile') //Llamada a configuracion

const knex = knex(knexConfig.development); //Inicializar el objeto
Model.knex(knex); //Configurar objection con datos de knex

module.exports=kenx; //Exportar configuracion



