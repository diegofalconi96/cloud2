/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('orders', function(table){
    table.integer('fkid_customer').unsigned();
    table.foreign('fkid_customer').references('id').inTable('customer');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('orders', function(table){
        table.dropForeign('fkid_customer');
        table.dropColumn('fkid_customer');
    });
};
