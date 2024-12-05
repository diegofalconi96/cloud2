const Knex = require('knex') //llamada a la libreria knex
const {Model} = require('objection') //llamada al modelo de objection
//llamado al knexfile para la configuracion
const knexConfig =require('./knexfile')

const knex = Knex(knexConfig.development); //Inicializar el objeto pero solo lo definimos para development

Model.knex(knex); //configurar objection con datos de knex

module.exports = knex; //exportar configuracion
