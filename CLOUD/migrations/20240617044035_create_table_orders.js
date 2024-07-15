/**
 * @param { import("knex"). Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
      table.increments('id').primary();
      table.date('order_date').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex"). Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('orders');
  };