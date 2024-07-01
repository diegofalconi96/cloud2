/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('orders', function(table){
      table.integer('fkid_employee').unsigned();
      table.foreign('fkid_employee').references('id').inTable('employee');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.alterTable('orders', function(table){
          table.dropForeign('fkid_employee');
          table.dropColumn('fkid_employee');
      });
  };