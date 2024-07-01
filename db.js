//llamada a la librería KNEX (INSTANCIANDO)
const Knex = require('knex') 
// llamada a model de objection (INSTANCIANDO)
const { Model } = require('objection')
//llamada a configuración 
const knexConfig = require('./knexfile')
//vamos hacer la configuración en KNEXT
//inicializar el objeto
const knex = Knex(knexConfig.development);
//configurar el objection con datos de knex
Model.knex(knex);
//para que pueda exportar la configuración
module.exports = knex;