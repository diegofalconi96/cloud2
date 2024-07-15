/**
 * @param { import("knex"). Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reviews', table => {
      table.increments('id').primary();
      table.integer('rating').notNullable();
      table.string('comment').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex"). Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
  };