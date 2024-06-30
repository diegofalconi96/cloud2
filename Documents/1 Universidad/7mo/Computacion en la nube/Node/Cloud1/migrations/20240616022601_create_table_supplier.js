/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('supplier', table => {
        table.increments('id').primary(); // Corregido de 'inclement' a 'increments'
        table.string('name').notNullable();
        table.string('contact_email').notNullable().unique();
        table.string('phone').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('supplier')
  
};
