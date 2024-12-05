const Knex = require('knex') //Llamada a la libreria  Knex
const {Model} = require('objection') //llamada a model de objection

const knexConfig = require('./knexfile')//llamada a configuracion

const knex = Knex(knexConfig.development);//Inicializar el objeto
Model.knex(knex); //configurar objection con datos de knex

module.exports = knex;  //exportar configuracion