/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('products', function(table){
      table.integer('fkid_suppliers').unsigned();
      table.foreign('fkid_suppliers').references('id').inTable('suppliers');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.alterTable('products', function(table){
          table.dropForeign('fkid_suppliers');
          table.dropColumn('fkid_suppliers');
      });
  };
