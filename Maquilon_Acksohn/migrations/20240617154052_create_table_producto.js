
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', function(table) {
        table.increments('id_prod').primary();
        table.string('nombre_prod').notNullable();
        table.decimal('precio_prod', 10, 2).notNullable();
        table.integer('stock_prod').notNullable();
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