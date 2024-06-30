/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary(); // Corregido de 'inclement' a 'increments'
        table.string('name').notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.integer('stock').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product')
  
};
