/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('sales', function(table){
      table.integer('fkid_products').unsigned();
      table.foreign('fkid_products').references('id').inTable('products');
    });
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('sales', function(table){
        table.dropForeign('fkid_products');
        table.dropColumn('fkid_products');
    });
};
