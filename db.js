const Knex = require('knex') // llmada a la libreria knex
const { Model } = require('objection') //llamadaa model de objection
const knexConfig = require('./knexfile') //llamada a configuracion

const knex = Knex(knexConfig.development) //Inicializar el objeto
Model.knex(knex); //Configuracion objecion con datos de knex

module.exports = knex; //exportar configuracion 