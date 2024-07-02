/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proveedores', function(table){
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('contacto').notNullable();
        table.string('telefono').notNullable();
        table.string('email').notNullable().unique();
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedores');
  
};
