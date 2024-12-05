/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bodega',table => {
        table.increments('id').primary();
        table.string('nombre',255).notNullable();
        table.string('ubicacion',255).notNullable();
        table.text('descripcion').nullable();
        
    
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('bodega');
};
