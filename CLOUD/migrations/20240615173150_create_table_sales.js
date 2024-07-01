/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sales', table => {
        table.increments('id').primary();
        table.integer('cantidad').notNullable();
        table.decimal('totalVenta').notNullable();
        table.timestamp('fecha').defaultTo(knex.fn.now()).notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('sales');
};
