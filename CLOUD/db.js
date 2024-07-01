const Knex = require('knex')//llamafa a la libreria
const {Model} = require('objection')//llamada a model objection
const knexConfig = require('./knexfile')//llamda a la configuracion

const knex = Knex(knexConfig.development)
Model.knex(knex)

module.exports = knex;