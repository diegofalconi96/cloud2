/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', function(table){
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.decimal('precio', 10, 2).notNullable();
        table.string('categoria').notNullable();
        table.string('disponibilidad').notNullable();
        table.timestamps(true, true);
      });
  
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto');
  
};
