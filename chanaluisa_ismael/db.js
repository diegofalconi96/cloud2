const knexLibrary = require('knex'); // llamada a la libreria knex
const { Model } = require('objection'); // llamada a model de objection
const knexConfig = require('./knexfile'); // llamada a configuracion

const knexInstance = knexLibrary(knexConfig.development); // inicializar el objeto
Model.knex(knexInstance); // configurar objection con datos de knex

module.exports = knexInstance; // exportar configuracion
