/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('venta', function(table) {
        table.increments('id_vent').primary();
        table.integer('cantidad_vent').notNullable();
        table.decimal('total_vent', 10, 2).notNullable();
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('venta');
};
