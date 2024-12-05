/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sales',table => { /**ventas*/
        table.increments('id').primary();
        table.decimal('total_amount', 10, 2).notNullable();
        table.timestamp('sale_date').defaultTo(knex.fn.now());
        table.boolean('active').notNullable().defaultTo(true);
        table.timestamps(true, true);
        
    });
  
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('sales') /**ventas */
};
