/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) 
{
    return knex.schema.createTable('proveedor', table =>
        {
            table.increments('id_proveedor').primary();
            table.string('nombre', 100).notNullable();
            table.string('apellido', 100);
            table.string('telefono', 20);
            table.string('direccion', 255);
            table.string('mail', 100);
        }
    )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedor')
  
};
