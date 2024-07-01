// db.js
const { Model } = require('objection'); // llamada a Model de Objection
const knexConfig = require('./knexfile'); // llamada a configuración de Knex

const knex = require('knex')(knexConfig.development); // inicializar el objeto knex con la configuración

Model.knex(knex); // configurar Objection con datos de knex

module.exports = knex; // exportar configuración

