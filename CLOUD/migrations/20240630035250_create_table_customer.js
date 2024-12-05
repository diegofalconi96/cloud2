/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//.crear tabla
exports.up = function(knex) {
    return knex.schema.createTable('customer',table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.timestamp(true,true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// eliminar tabla
exports.down = function(knex) {
  return knex.schema.dropTable('customer')
};