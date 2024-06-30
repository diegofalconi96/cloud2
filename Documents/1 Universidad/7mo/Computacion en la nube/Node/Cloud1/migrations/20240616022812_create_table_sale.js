/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sale', table => {
        table.increments('id').primary(); // Corregido de 'inclement' a 'increments'
        table.decimal('total', 10, 2).notNullable();
        table.timestamps(true, true);
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('sale')
  
};
