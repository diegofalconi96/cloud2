/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('sales', function(table){
      table.integer('fkid_orders').unsigned();
      table.foreign('fkid_orders').references('id').inTable('orders');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function(knex) {
    return knex.schema.alterTable('sales', function(table){
        table.dropForeign('fkid_orders');
        table.dropColumn('fkid_orders');
    });
};
