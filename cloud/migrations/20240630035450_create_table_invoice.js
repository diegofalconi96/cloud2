/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('invoice',table => {
        table.increments('id').primary();
        table.string('invoice_number').notNullable().unique();
        table.decimal('total_amount', 10, 2).notNullable();
        
        table.timestamps(true, true);
    });
    
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('invoice') /**factura */
};