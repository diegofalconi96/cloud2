/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('proveedores', table => {
      table.increments('id').primary();
      table.string('namepro').notNullable();
      table.string('contact_email').notNullable();
      table.string('contact_phone');
      table.timestamps(true, true);  // Creación de columnas created_at y updated_at
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('proveedores');
};

