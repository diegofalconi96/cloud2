/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary();
        table.timestamp('fecha').defaultTo(knex.fn.now()).notNullable();
        table.integer('cantidad').notNullable();
        table.boolean('estado').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
