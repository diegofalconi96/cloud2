const Knex = require('knex') //L[amada a La librería knex
const { Model }= require('objection') //Llamada a modelo de inyeccion
const knexConfig = require('./knexfile') //Llamada a configuracion

const knex = Knex(knexConfig.development); // Inicializar el objeto
Model.knex(knex); //Configurar objection con datos de knex
module.exports = knex; //Exportar configuracion