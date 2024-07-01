/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders',table => { /**pedidos */
        table.increments('id').primary();
        table.decimal('total_amount', 10, 2).notNullable();
        table.timestamp('order_date').defaultTo(knex.fn.now());
        table.timestamp('shipping_date').nullable();
        table.string('shipping_address').nullable();
        table.timestamps(true, true);
        
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};