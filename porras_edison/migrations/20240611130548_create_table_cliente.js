/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {  //subir migracion
  //completar estructura para tabla clientes  y crear 5 tablas en total
  return knex.schema.createTable('cliente', table => {
    table.increments('id').primary();
    table.string('nombre').notNullable();
    table.string('email').notNullable().unique();
    table.timestamp(true,true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) { //quitar migracion
    return knex.schema.dropTable('cliente')
};
