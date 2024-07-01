/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('vendedor',table => {
        table.increments('id').primary();
        table.string('nombres',255).notNullable();
        table.string('apellidos',255).notNullable();
        table.string('celular',15).notNullable();
        table.string('email',100).notNullable();
        table.boolean('activo').defaultTo(true)
    
      })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('vendedor');
  
};
